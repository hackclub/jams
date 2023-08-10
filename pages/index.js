import Header from '@/components/Header'
import { Box, Image, Flex, Badge, Container, Grid, Heading, Text, Card } from 'theme-ui'
import Footer from '@/components/Footer'
import SearchControls from '@/components/Search'
import PreviewCard from '@/components/PreviewCard'
import { useEffect, useState } from 'react'
import Icon from '@hackclub/icons'
import { useRouter } from 'next/router';

import path from 'path';
import matter from 'gray-matter';

export async function getStaticProps() {
  const fs = require('fs');

  const jamsDir = path.join(process.cwd(), 'jams');

  const jamsContent = {
    singles: getJams(fs, path.join(jamsDir, 'singles')),
    batches: getBatches(fs, path.join(jamsDir, 'batches')),
  };
  return {
    props: { jamsContent },
  };
}

function getJams(fs, directory) {
  const filenames = fs.readdirSync(directory);

  return filenames.map((filename) => {
    const fileContent = fs.readFileSync(path.join(directory, filename, 'en-US.md'), 'utf8');
    const { data, content } = matter(fileContent);

    return {
      ...data, // Spread the properties from the data object
      content,
    };
  });
}

function getBatches(fs, directory) {
  const batchNames = fs.readdirSync(directory);

  return batchNames.map((batchName) => {
    const batchDirectory = path.join(directory, batchName);
    const readMeFileContent = fs.readFileSync(path.join(batchDirectory, 'readMe', 'en-US.md'), 'utf8');
    const { data: readMeData, content: readMeContent } = matter(readMeFileContent);

    const partsDirectory = path.join(batchDirectory);
    const partsNames = fs.readdirSync(partsDirectory).filter(part => part.startsWith('part'));
    partsNames.sort((a, b) => a.localeCompare(b, undefined, {numeric: true}));

    const parts = partsNames.map(partName => {
      const partContent = fs.readFileSync(path.join(partsDirectory, partName, 'en-US.md'), 'utf8');
      const { data, content } = matter(partContent);

      return {
        ...data, // Spread the properties from the data object
        content,
      };
    });

    return {
      ...readMeData, // Spread the properties from the readMeData object
      content: readMeContent,
      parts,
    };
  });
}





function Slides({router, initialFeatures}) {
  const [active, setActive] = useState(Math.floor(initialFeatures.length / 2))

  const [features, setFeatures] = useState(initialFeatures);



    function moveRight() {
    const copyOfFeatures = [...features];
  
    const firstValue = copyOfFeatures.shift();
    copyOfFeatures.push(firstValue);
  
    setFeatures(copyOfFeatures);
  }
  
  function moveLeft() {
    const copyOfFeatures = [...features];
  
    const lastValue = copyOfFeatures.pop();
    copyOfFeatures.unshift(lastValue);
  
    setFeatures(copyOfFeatures);
  }
  

  
  

  return (
    <Container sx={{ py: 4, alignItems: "center", display: 'flex', flexWrap: 'nowrap' }}>
<Card
  key={2}
  onClick={(event) => {
    moveRight(); // Call your desired function
  }}

  sx={{
    // backgroundImage: `linear-gradient(180deg, rgba(70, 10, 105, 0.60) 0%, rgba(70, 10, 105, 0.00) 36.98%, rgba(49, 7, 74, 0.39) 59.90%, rgba(56, 10, 83, 0.60) 100%), url("${features[1].thumbnail}")`,
    backgroundImage: `url("${features[1].thumbnail}")`,
    backgroundSize: 'cover',
    cursor: "pointer",
    backgroundPosition: 'center',
    boxShadow: '0px -4px 64px 0px rgba(240, 146, 75, 0.50)',
    color: 'white',
    border: '4px solid white',
    textAlign: 'left',
    height: '12.5vw',
    width: '22vw',
    flexShrink: 0,
    marginRight: '-12.5vw',
    opacity: 0.5,
    zIndex: 0,
  }}
>
  {/* <Text as="h2" sx={{ fontSize: 36, lineHeight: 1, color: '#000' }}>
    {features[1].title}
  </Text> */}
</Card>


      <Card
          key={0}
          
          onClick={() => router.push(`/jam/${features[0].slug}`)}
          sx={{
                backgroundImage: `linear-gradient(180deg, rgba(70, 10, 105, 0.60) 0%, rgba(70, 10, 105, 0.00) 36.98%, rgba(49, 7, 74, 0.39) 59.90%, rgba(56, 10, 83, 0.60) 100%), url("${features[0].thumbnail}")`,
    backgroundSize: 'cover',
    cursor: "pointer",
    
    backgroundPosition: 'center',
            boxShadow: '0px -4px 64px 0px rgba(240, 146, 75, 0.50)',
            color: 'white',
            border: '4px solid white',
            textAlign: 'left',
            height: ['50vw', '38vw', '32vw', '25vw'],
            width: ['88vw', '66vw', '55vw', '44vw'],
            flexShrink: '0',
            zIndex: 1,
            overflow: 'visible',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',

                      }}>
            <Box>
            <Badge
        key="keywordFeature"
        mr={2}
        sx={{ cursor: 'pointer',
        fontSize: ["14px", "auto"],
        backgroundColor: "#fff" }}
        variant="outline"
        color="#993CCF"
        >
                {features[0].keywords.split(", ")[0]}

      </Badge>
      <Badge
        key="difficultyFeature"
        mr={2}
        sx={{ cursor: 'pointer',
        fontSize: ["14px", "auto"],
        backgroundColor: "#fff" }}
        variant="outline"
        color="#993CCF"
        >
                {features[0].difficulty}

      </Badge>
      <Badge
        key="timeFeature"
        mr={2}
        sx={{ cursor: 'pointer', 
        fontSize: ["14px", "auto"],
        backgroundColor: "#fff" }}
        variant="outline"
        color="#993CCF"
        >
        {features[0].timeEstimate}
      </Badge>
            </Box>
            <Box sx={{display: "flex", cursor: "pointer", flexDirection: "row", marginLeft: ["-38px", "-56px"],  marginRight: ["-38px", "-56px"], zIndex: 2, justifyContent: "space-between"}}>
              <Box 
              
              onClick={(event) => {
                event.stopPropagation(); // Stop event propagation
                moveRight(); // Call your desired function
              }}
              sx={{backgroundColor: "#fff", height: "48px", width: "48px", borderRadius: "24px"}}>
              <Icon glyph="view-back" size={48} color="#3E4857" />

              </Box>
              <Box 
                onClick={(event) => {
                  event.stopPropagation(); // Stop event propagation
                  moveLeft(); // Call your desired function
                }}
              sx={{backgroundColor: "#fff", cursor: "pointer", height: "48px", width: "48px", borderRadius: "24px"}}>
              <Icon glyph="view-forward" size={48} color="#3E4857" />

              </Box>
            </Box>
          <Text as="h2" sx={{ fontSize: [22, 22, 24, 28, 32], lineHeight: 1, userSelect: "none" }}>
            {features[0].title}
          </Text>
        </Card>
        <Card
        onClick={() => moveLeft()}
  key={1}
  sx={{
    // backgroundImage: `linear-gradient(180deg, rgba(70, 10, 105, 0.60) 0%, rgba(70, 10, 105, 0.00) 36.98%, rgba(49, 7, 74, 0.39) 59.90%, rgba(56, 10, 83, 0.60) 100%), url("${features[2].thumbnail}")`,
    backgroundImage: `url("${features[2].thumbnail}")`,

    backgroundSize: 'cover',
    cursor: "pointer",
    backgroundPosition: 'center',
    boxShadow: '0px -4px 64px 0px rgba(240, 146, 75, 0.50)',
    color: 'white',
    border: '4px solid white',
    textAlign: 'left',
    height: ['12.5vw'],
    width: '22vw',
    flexShrink: 0,
    marginLeft: '-12vw',
    opacity: 0.5,
    zIndex: 0,
  }}
>
  {/* <Text as="h2" sx={{ fontSize: 36, lineHeight: 1, color: '#000' }}>
    {features[2].title}
  </Text> */}
</Card>
    </Container>
  )
}

function useStickyCategoryBar() {
  const [isCategoryBarSticky, setCategoryBarSticky] = useState(false);

  const handleScroll = () => {
    const headerHeight = 100; // Adjust this value based on the header's height
    const scrollTop = window.scrollY;
    setCategoryBarSticky(scrollTop >= headerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isCategoryBarSticky;
}

export default function Index(props) {

  const isCategoryBarSticky = useStickyCategoryBar();

  const categories = ["Web", "Game", "Crypto", "Art", "Python", "3D", "AI"]
  const [selectedCategories, setSelectedCategories] = useState([])
  const [query, setQuery] = useState("")
  const [difficulty, setDifficulty] = useState("");
  const [time, setTime] = useState("");

  const [filter, setFilter] = useState('')
  const [language, setLanguage] = useState('')
  const [timeEstimate, settimeEstimate] = useState('') 
  const [selected, setSelected] = useState('')

  const router = useRouter();


  const batches = props.jamsContent.batches
  .filter(batch => {

    if(batch.difficulty?.toLowerCase() != difficulty && difficulty != "") {
  
      return false
    }
      
    if(batch.timeEstimate != time && time != "") {
  
      return false
    }
    
    // Check if any value in batch's values contains all words in the query
    const batchValues = Object.values(batch);
    const queryWords = query.toLowerCase().trim().split(" ");
  
    for (let singleBatchValue = 0; singleBatchValue < batchValues.length; singleBatchValue++) {
      let successful = true;
  
      const batchValueAsString = String(batchValues[singleBatchValue]).toLowerCase(); // Convert to string
      const batchValueWords = batchValueAsString.split(" ");
  
      for (let singleWord = 0; singleWord < queryWords.length; singleWord++) {
        if (batchValueWords.indexOf(queryWords[singleWord]) === -1) {
          successful = false;
        }
      }
  
      if (successful) {
        // Apply other conditions and return the result
        return !batch?.keywords?.includes("Beta") && (batch?.keywords?.split(",")?.some((keyword) => selectedCategories.includes(keyword)) || selectedCategories == [] || selectedCategories == undefined || selectedCategories == "") // display it if other attributes work
      }
    }
  
    return false;
  });
  const jams = props.jamsContent.singles
  .filter((jam) => 
{ 
  /* check if it is true that:
      for some value in jam's values
      every part of the query is contained within that value*/
  var jamValues = Object.values(jam); // indicates each value that exists in the jam dict
  var queryWords = query.toLowerCase().trim().split(" "); // splits query into separate words and elimiates prefix and suffix whitespaces
  
  if(jam.difficulty?.toLowerCase() != difficulty && difficulty != "") {
    console.log(jam.difficulty, difficulty)

    return false
  }
    
  if(jam.timeEstimate != time && time != "") {
    console.log(jam.difficulty, difficulty)

    return false
  }

  for (let singleJamValue = 0; singleJamValue < jamValues.length; singleJamValue++) { // iterates through the jam values
    var successful = true; // assume it works
    for (let singleWord = 0; singleWord < queryWords.length; singleWord++) { // iterates through the words in query
      if ((jamValues[singleJamValue].toLowerCase().split(" ")).indexOf(queryWords[singleWord]) == -1) { // if ANY word in query is not found in the values
        successful = false; // it is not working / not successful / wont be displayed
      }
    }
    if (successful) { // if it is confirmed to be successful
      return !jam?.keywords?.includes("Beta") && (jam?.keywords?.split(",")?.some((keyword) => selectedCategories.includes(keyword)) || selectedCategories == [] || selectedCategories == undefined || selectedCategories == "") // display it if other attributes work
    }
  }
    return false; // it went here if no part of its values are successful, therefore it doesnt fit search criteria and is not shown
    // dont consider other attributes, since it's AND logic, and one of the conditions alr didnt work
}
  )

  const desiredSlugs = ["ai-travel", "online-store", "voxel-animation"];
  const features = props.jamsContent.singles.filter(jam => desiredSlugs.includes(jam.slug));
  
  const desiredSlugsBatches = ["sprig", "webOS", "artificial-intelligence", "usb-hub"];
  const fallFeatures = props.jamsContent.batches.filter(batch => desiredSlugsBatches.includes(batch.slug));
  

  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])



  return (
    <>
      <Box
        sx={{
          backgroundImage:
            'linear-gradient(180deg, #993CCF 0%, rgba(170, 77, 181, 0.95) 17.19%, rgba(193, 99, 146, 0.90) 31.77%, rgba(223, 129, 101, 0.71) 52.08%, rgba(240, 146, 75, 0.60) 63.54%, rgba(240, 146, 75, 0.00) 96.88%), linear-gradient(180deg, #D9D9D9 0%, rgba(255, 255, 255, 0.00) 100%)',
          backgroundSize: 'cover',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pb: 6,
          position: 'relative',
          height: '100%',
        }}>
        <Box
          sx={{
            background:
              'url(/assets/main-texture.svg), lightgray 0% 0% / 40.00000059604645px 40.00000059604645px repeat',
            backgroundBlendMode: 'color-burn',
            position: 'absolute',
            top: 0,
            left: '0',
            zIndex: -1
          }}
        />
        <Image sx={{width: "100%", height: "100%", position: "absolute", mixBlendMode: "color-burn"}} src="https://cloud-omdlqtlig-hack-club-bot.vercel.app/0rectangle_60.png"/>
        <Header jams={jams} query={query} setQuery={setQuery} isHomePage={true} />
        
        <Box
          sx={{ p: 4, textAlign: 'center',          marginTop: "64px",          position: 'relative', zIndex: 2,
           }}>
          <Text
            as="h1"
            sx={{
              fontFamily: 'var(--heading)',
              fontSize: [48, 56, 96],
              textShadow: '0px 0px 64px 0px rgba(56, 10, 83, 0.75)',
              mb: 0,
              mt: 0,
              lineHeight: 1,
              fontWeight: 400
            }}>
            Code Jams
          </Text>
          <Box sx={{maxWidth: "100%", px: [2, 4], py: [2, 3], textAlign: "center"}}>
            <Text
              sx={{
                textShadow: '0px 0px 32px 0px rgba(56, 10, 83, 0.50)',
                fontSize: [16, 18, 24],
                mt: 0,
                lineHeight: 1.2,
                pt: 0,
                px: 3,
              }}>
              Collaborative coding workshops where sparks ignite, <br/>fears
              dissolve, and inventions come to life.
            </Text>
          </Box>
          <Slides initialFeatures={features} router={router}/>
        </Box>
      </Box>
      <Container sx={{ marginTop: '-132px', position: "relative", zIndex: 1 }}>
        <Box sx={{backgroundColor: "#FDF5EC", border: "1px solid #F0924B", padding: "32px", borderRadius: "16px"}}>
        <Text as="h2" sx={{ fontSize: 42, lineHeight: 1.2, fontWeight: 600, margin: 0, p: 0, zIndex: 2 }}>
          New to Jams? Start Jamming! 🍁
        </Text>
        <Text as="h2" sx={{ fontSize: 24, fontWeight: 400, margin: 0, p: 0, zIndex: 2 }}>
        Here are some Great Multi-part Jams to Kickoff Your Club  this Fall 🍂            </Text>
        <Grid columns={[null, '1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']} gap={3} sx={{ pt: 4 }}>

        {fallFeatures.map((fallFeature, idx) =>
            <a style={{color: "#000", position: "relative", textDecoration: "none"}} href={`/batch/${fallFeature.slug}`}>
                    {fallFeature.sticker && (
          <Box
            sx={{
              position: "absolute",
              top: "-48px", // Adjust the top distance as needed
              right: "-48px", // Adjust the right distance as needed
              zIndex: 1,
            }}
          >
            <img src={fallFeature.sticker} style={{width: "96px", height: "96px"}}/>
          </Box>
        )}
            <PreviewCard 
            style={{cursor: "pointer"}}
            key={idx + fallFeature.title} light={true} {...fallFeature} />
            </a>
        )}
        </Grid>
        
        </Box>
        
        <Text as="h1" sx={{ fontSize: 48, fontWeight: 600, zIndex: 2 }}>
          Jams
        </Text>

        {/* <Text sx={{ fontSize: 24 }}>
          Batches{' '}
          <Text
            sx={{
              fontStyle: 'italic',
              color: 'var(--text-purple)',
              verticalAlign: 'text-end'
            }}>
            (multi-part Jams)
          </Text>
        </Text>
        <Grid columns={[null, '1fr', '1fr', '1fr 1fr']} gap={3} sx={{ py: 3 }}>

        {batches.map((batch) => 
        <a style={{textDecoration: "none", color: "#000"}} href={`/batch/${batch.slug}`}>
          <Box
  sx={{
    position: "relative",
    cursor: "pointer",
    flexDirection: "column",
    borderRadius: "16px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    aspectRatio: "5/2",
    backgroundSize: "cover",
    overflow: "hidden",
    p: 3
  }}
>
  <Box></Box>
  <Box sx={{display: "flex", flexDirection: "column"}}>
  <Text
    sx={{
      fontSize: ["18px", "24px"],
      maxWidth: "400px",
      textAlign: "center",
      fontWeight: 600,
      color: "#fff",
      position: "relative",
      zIndex: 1,
    }}
  >
    {batch.title}
  </Text>
  <Text
    sx={{
      fontSize: "16px",
      color: "#fff",
      position: "relative",
      zIndex: 1,
      display: ["none", "block"]
    }}
  >
    {batch.short}
  </Text>
  </Box>
  <Box style={{zIndex: 1}}>
            <Badge
        key="keywordFeature"
        mr={2}
        sx={{ fontSize: ["14px", "auto"], cursor: 'pointer', backgroundColor: "#fff" }}
        variant="outline"
        color="#993CCF"
        >
                {batch?.keywords?.split(", ")[0]}

      </Badge>
      <Badge
        key="difficultyFeature"
        mr={2} 
        sx={{ cursor: 'pointer', backgroundColor: "#fff", fontSize: ["14px", "auto"] }}
        variant="outline"
        color="#993CCF"
        >
                {batch.difficulty}

      </Badge>
      <Badge
        key="timeFeature"
        mr={2}
        sx={{ cursor: 'pointer', backgroundColor: "#fff", fontSize: ["14px", "auto"] }}
        variant="outline"
        color="#993CCF"
        >
        {batch.timeEstimate}
      </Badge>
            
  </Box>
  <Box
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "16px",
      filter: "brightness(0.5) blur(1px)", // Adjust the brightness value as desired
    }}
  >
    <img
      src={batch.thumbnail}
      alt="Thumbnail"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "16px",
      }}
    />
  </Box>
</Box>
</a>



        )}
        </Grid> */}
      </Container>
      
      <Container>
        {/* <Text sx={{ fontSize: 24 }}>
          Singles{' '}
          <Text
            sx={{
              fontStyle: 'italic',
              color: 'var(--text-purple)',
              verticalAlign: 'text-end'
            }}>
            (one-part Jams)
          </Text>
        </Text> */}
        
        <Box sx={{display: ["none", "none", "flex"],              top: 84, backgroundColor: "#fff", zIndex: 2,
          left: 0, opacity: `${Math.min(((scrollPosition / 500) - 1), 1)}`,        backdropFilter: 'blur(5px)',          backgroundColor: `rgba(200, 200, 200, ${Math.min(((scrollPosition / 500) - 1), 0.75)})`,
          right: 0, cursor: 'pointer', position: 'fixed', flexDirection: "row", borderColor: "#e0e6ed", borderTop: "1px solid #e0e6ed", borderBottom: "1px solid #e0e6ed"}}>
        <Container style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: 'center'}}>
          <Box>
        <Badge
        key="all"
        mr={2}
        sx={{ cursor: 'pointer', backgroundColor: selectedCategories == "" ? ("#993CCF") : ("#fff"), marginTop: "8px", marginBottom: "8px", fontSize: ["14px", "auto"] }} 
        variant="outline"
        color={selectedCategories == "" ? ("#fff") : ("#993CCF")}
        onClick={() => {
          setSelectedCategories([])
          console.log(selectedCategories)
        }}
        >
                All 

      </Badge>
        {categories.map((category) =>
        <Badge
        key={category}
        mr={2}
        sx={{backgroundColor: selectedCategories.includes(category) ? ("#993CCF") : ("#fff"), marginTop: "8px", marginBottom: "8px", fontSize: ["14px", "auto"] }} 
        variant="outline"
        color={selectedCategories.includes(category) ? ("#fff") : ("#993CCF")}
        onClick={() => 
          setSelectedCategories((currentCategories) => {
            if (currentCategories.includes(category)) {
              const updatedCategories = currentCategories.filter((cat) => cat !== category);
              console.log(updatedCategories);
              return updatedCategories;
            } else {
              const updatedCategories = [...currentCategories, category];
              console.log(updatedCategories);
              return updatedCategories;
            }
          })
        }
        >
                {category}

      </Badge>        
      )}
      </Box>
      <Box style={{display: "flex", flexDirection: "row", gap: "16px"}}>
      <Box style={{ display: "flex", gap: "8px", backgroundColor: "#fff", padding: "4px 8px", borderRadius: "8px" }}>
        <span
          style={{
            backgroundColor: difficulty === "" ? "#993CCF" : "#fff",
            margin: "0px",
            padding: "0px 8px",
            color: difficulty === "" ? "#fff" : "#000",
            borderRadius: "4px",
            cursor: "pointer",
            ':hover': {
              backgroundColor: difficulty === "" ? "#993CCF" : "#EFEFEF",
            },
          }}
          onClick={() => setDifficulty("")}
        >
          Any
        </span>
        <Text
          sx={{
            backgroundColor: difficulty === "beginner" ? "#993CCF" : "#fff",
            margin: "0px",
            padding: "0px 4px",
            color: difficulty === "beginner" ? "#fff" : "#000",
            borderRadius: "4px",
            cursor: "pointer",
            transition: 'background-color 0.3s, color 0.3s',
            ':hover': {
              backgroundColor: difficulty === "beginner" ? "#993CCF" : "#EFEFEF",
            },
          }}
          onClick={() => setDifficulty("beginner")}
        >
          Beginner
        </Text>
        <Text
          sx={{
            backgroundColor: difficulty === "intermediate" ? "#993CCF" : "#fff",
            margin: "0px",
            padding: "0px 4px",
            color: difficulty === "intermediate" ? "#fff" : "#000",
            borderRadius: "4px",
            cursor: "pointer",
            transition: 'background-color 0.3s, color 0.3s',
            ':hover': {
              backgroundColor: difficulty === "intermediate" ? "#993CCF" : "#EFEFEF",
            },
          }}
          onClick={() => setDifficulty("intermediate")}
        >
          Intermediate
        </Text>
        <Text
          sx={{
            backgroundColor: difficulty === "advanced" ? "#993CCF" : "#fff",
            margin: "0px",
            padding: "0px 4px",
            color: difficulty === "advanced" ? "#fff" : "#000",
            borderRadius: "4px",
            cursor: "pointer",
            transition: 'background-color 0.3s, color 0.3s',
            ':hover': {
              backgroundColor: '#EFEFEF',
            },
            ':hover': {
              backgroundColor: difficulty === "advanced" ? "#993CCF" : "#EFEFEF",
            },
          }}
          onClick={() => setDifficulty("advanced")}
        >
          Advanced
        </Text>
      </Box>

      <Box style={{ display: "flex", gap: "8px", backgroundColor: "#fff", padding: "4px 8px", borderRadius: "8px" }}>
        <span
          style={{
            backgroundColor: time === "" ? "#993CCF" : "#fff",
            margin: "0px",
            padding: "0px 8px",
            color: time === "" ? "#fff" : "#000",
            borderRadius: "4px",
            cursor: "pointer",
            ':hover': {
              backgroundColor: time === "" ? "#993CCF" : "#EFEFEF",
            },
          }}
          onClick={() => setTime("")}
        >
          Any
        </span>
        <Text
          sx={{
            backgroundColor: time === "30 Min" ? "#993CCF" : "#fff",
            margin: "0px",
            padding: "0px 4px",
            color: time === "30 Min" ? "#fff" : "#000",
            borderRadius: "4px",
            cursor: "pointer",
            transition: 'background-color 0.3s, color 0.3s',
            ':hover': {
              backgroundColor: time === "30 Min" ? "#993CCF" : "#EFEFEF",
            },
          }}
          onClick={() => setTime("30 Min")}
        >
          30 Min
        </Text>
        <Text
          sx={{
            backgroundColor: time === "60 Min" ? "#993CCF" : "#fff",
            margin: "0px",
            padding: "0px 4px",
            color: time === "60 Min" ? "#fff" : "#000",
            borderRadius: "4px",
            cursor: "pointer",
            transition: 'background-color 0.3s, color 0.3s',
            ':hover': {
              backgroundColor: time === "60 Min" ? "#993CCF" : "#EFEFEF",
            },
          }}
          onClick={() => setTime("60 Min")}
        >
          60 Min
        </Text>
      </Box>
      </Box>
</Container>
        </Box>
        {/* <SearchControls
          query={query}
          setQuery={setQuery}
          filter={filter}
          setFilter={setFilter}
          language={language}
          setLanguage={setLanguage}
          timeEstimate={timeEstimate}
          settimeEstimate={settimeEstimate}
        /> */}
         
        <Text style={{width: "100"}}> 
          {jams.length + batches.length != 0 ? (<p style={{marginTop: 8, marginBottom: 0}}>{jams.length + batches.length} Jams Found</p>) : (<p style={{marginTop: 8, marginBottom: 0}}>No Results Found</p>)}
          </Text>
        <Grid columns={[null, '1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr']} gap={3} sx={{ py: 3 }}>


          {jams.map((jam, idx) => (
            <a style={{color: "#000", textDecoration: "none"}} href={`/jam/${jam.slug}`}>
            <PreviewCard 
            style={{cursor: "pointer"}}
            key={idx + jam.title} light={true} {...jam} />
            </a>
          ))}
                    {batches.
                    map((batch, idx) =>
            <a style={{color: "#000", textDecoration: "none"}} href={`/batch/${batch.slug}`}>
            <PreviewCard 
            style={{cursor: "pointer"}}
            key={idx + batch.title} light={true} {...batch} />
            </a>  
          )}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

