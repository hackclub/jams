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

  const categories = ["Web", "Game", "Crypto", "Art", "Python", "3D", "AI/ML"]
  const [selectedCategory, setSelectedCategory] = useState("")
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState('')
  const [language, setLanguage] = useState('')
  const [timeEstimate, settimeEstimate] = useState('') 
  const [selected, setSelected] = useState('')

  const router = useRouter();


  const batches = [... props.jamsContent.batches]
  const jams = props.jamsContent.singles
  .filter((jam) => 
{ 
  return (!jam.keywords.includes("Beta") && jam?.keywords?.includes(selectedCategory) && Object.values(jam).some((value) => value.toLowerCase().includes(query.toLowerCase().split(" "))))
}
  )

  const features = [props.jamsContent.singles[3], props.jamsContent.singles[4], props.jamsContent.singles[0]]



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
              lineHeight: 1,
              fontWeight: 400
            }}>
            Code Jams
          </Text>
          <Box sx={{maxWidth: "100%", padding: [2, 4], textAlign: "center"}}>
            <Text
              sx={{
                textShadow: '0px 0px 32px 0px rgba(56, 10, 83, 0.50)',
                fontSize: [16, 18, 24],
                mt: 0,
                lineHeight: 1.2,
                px: 3,
              }}>
              Collaborative coding workshops where sparks ignite, <br/>fears
              dissolve, and inventions come to life.
            </Text>
          </Box>
          <Slides initialFeatures={features} router={router}/>
        </Box>
      </Box>
      <Container sx={{ marginTop: '-72px' }}>
        <Text as="h1" sx={{ fontSize: 48, fontWeight: 600, zIndex: 2 }}>
          Jams
        </Text>
        <Text sx={{ fontSize: 24 }}>
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
          <Box
          onClick={() => router.push(`/batch/${batch.slug}`)}
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



        )}
        </Grid>
      </Container>
      
      <Container>
        <Text sx={{ fontSize: 24 }}>
          Singles{' '}
          <Text
            sx={{
              fontStyle: 'italic',
              color: 'var(--text-purple)',
              verticalAlign: 'text-end'
            }}>
            (one-part Jams)
          </Text>
        </Text>
        
        <Box style={{display: "flex",              top: 84, backgroundColor: "#fff", zIndex: 2,
          left: 0, opacity: `${Math.min(((scrollPosition / 500) - 1), 1)}`,        backdropFilter: 'blur(5px)',          backgroundColor: `rgba(200, 200, 200, ${Math.min(((scrollPosition / 500) - 1), 0.75)})`,
          right: 0, cursor: 'pointer', position: 'fixed', flexDirection: "row", borderColor: "#e0e6ed", borderTop: "1px solid #e0e6ed", borderBottom: "1px solid #e0e6ed"}}>
        <Container>
        <Badge
        key="all"
        mr={2}
        sx={{ cursor: 'pointer', backgroundColor: selectedCategory == "" ? ("#993CCF") : ("#fff"), marginTop: "8px", marginBottom: "8px", fontSize: ["14px", "auto"] }} 
        variant="outline"
        color={selectedCategory == "" ? ("#fff") : ("#993CCF")}
        onClick={() => setSelectedCategory("")}
        >
                All

      </Badge>
        {categories.map((category) =>
        <Badge
        key="all"
        mr={2}
        sx={{backgroundColor: selectedCategory == category ? ("#993CCF") : ("#fff"), marginTop: "8px", marginBottom: "8px", fontSize: ["14px", "auto"] }} 
        variant="outline"
        color={selectedCategory == category ? ("#fff") : ("#993CCF")}
        onClick={() => setSelectedCategory(category)}
        >
                {category}

      </Badge>        
      )}
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
          {jams.length != 0 ? (<p style={{marginTop: 8, marginBottom: 0}}>{jams.length} Jams Found</p>) : (<p style={{marginTop: 8, marginBottom: 0}}>No Results Found</p>)}

        <Grid columns={[null, '1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr']} gap={3} sx={{ py: 3 }}>

          {jams.map((jam, idx) => (
            <PreviewCard 
            style={{cursor: "pointer"}}
            onClick={() => router.push(`/jam/${jam.slug}`)}
            key={idx} light={true} {...jam} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

