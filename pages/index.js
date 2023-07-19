import Header from '@/components/Header'
import { Box, Flex, Badge, Container, Grid, Heading, Text, Card } from 'theme-ui'
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



const batches = [
  {
    title: 'Creating Your Personal Web-based Operating System (w/ Apps included)',
    short: "An Introspective Journey to Define the Self in Code",
    slug: "webOS",
    description: 'What if instead of directing random strangers on the internet to your boring personal website, you could direct them to an entire OS (where through exploring, they get to know you)',
    video: 'https://cloud-cq9o4h1mp-hack-club-bot.vercel.app/0movie_on_7-7-23_at_10.08_am.mp4',
    thumbnail: 'https://cloud-78sm4amqd-hack-club-bot.vercel.app/0image.png',
    keywords: 'Web',
    timeEstimate: '5 Hours',
    difficulty: 'Beginner',
    numberOfParts: 4
  },
  {
    title: 'Creating Your Personal Web-based Operating System (w/ Apps included)',
    short: "An Introspective Journey to Define the Self in Code",
    slug: "webOS",
    description: 'What if instead of directing random strangers on the internet to your boring personal website, you could direct them to an entire OS (where through exploring, they get to know you)',
    video: 'https://cloud-cq9o4h1mp-hack-club-bot.vercel.app/0movie_on_7-7-23_at_10.08_am.mp4',
    thumbnail: 'https://cloud-78sm4amqd-hack-club-bot.vercel.app/0image.png',
    keywords: 'Web',
    timeEstimate: '5 Hours',
    difficulty: 'Beginner',
    numberOfParts: 4
  },
  {
    title: 'Creating Your Personal Web-based Operating System (w/ Apps included)',
    short: 'An Introspective Journey to Define the Self in Code',
    slug: "webOS",

    description: 'What if instead of directing random strangers on the internet to your boring personal website, you could direct them to an entire OS (where through exploring, they get to know you)',
    video: 'https://cloud-cq9o4h1mp-hack-club-bot.vercel.app/0movie_on_7-7-23_at_10.08_am.mp4',
    thumbnail: 'https://cloud-78sm4amqd-hack-club-bot.vercel.app/0image.png',
    keywords: 'Web',
    timeEstimate: '5 Hours',
    difficulty: 'Beginner',
    numberOfParts: 4
  },
  {
    title: 'Creating Your Personal Web-based Operating System (w/ Apps included)',
    short: 'An Introspective Journey to Define the Self in Code',
    slug: "webOS",

    description: 'What if instead of directing random strangers on the internet to your boring personal website, you could direct them to an entire OS (where through exploring, they get to know you)',
    video: 'https://cloud-cq9o4h1mp-hack-club-bot.vercel.app/0movie_on_7-7-23_at_10.08_am.mp4',
    thumbnail: 'https://cloud-78sm4amqd-hack-club-bot.vercel.app/0image.png',
    keywords: 'Web',
    timeEstimate: '5 Hours',
    difficulty: 'Beginner',
    numberOfParts: 4
  }


]

const slides = [
  {
    title: 'Sample Hack Club Built an AI-Powered Comedy Club at AngelHacks',
    description:
      ' Using GPT 4.0, the game assesses your humor and rewards points and laughter based on its evaluation of your comedic skills.',
      thumbnail: 'https://cloud-78sm4amqd-hack-club-bot.vercel.app/0image.png',
    timeEstimate: "45min",
    keywords: ["Web", "VR", "Sample"],
    difficulty: "Intermediate",
    slug: "example"
  },
  {
    title: 'Sample2 Hack Club Built an AI-Powered Comedy Club at AngelHacks',
    description:
      ' Using GPT 4.0, the game assesses your humor and rewards points and laughter based on its evaluation of your comedic skills.',
    thumbnail: 'https://cloud-kpqzgy9pn-hack-club-bot.vercel.app/0kmm_6259.jpeg',
    timeEstimate: "30min",
    keywords: ["Mobile", "OS", "Sample"],
    difficulty: "Intermediate",
    slug: "webSample"

  },
  {
    title: 'Sample3 Hack Club Built an AI-Powered Comedy Club at AngelHacks',
    description:
      ' Using GPT 4.0, the game assesses your humor and rewards points and laughter based on its evaluation of your comedic skills.',
    thumbnail: 'https://cloud-79krudf79-hack-club-bot.vercel.app/0hackers-assemble__1_.png',
    timeEstimate: "1 Hour",
    keywords: ["AI/ML", "VR", "Sample"],
    difficulty: "Beginner",
    slug: "webSample"

  }
]

const fakeJams = [
  {
    keywords: ['Web'],
    difficulty: 'Beginner',
    timeEstimate: '45 Min',
    image: 'https://picsum.photos/300/200',
    title: 'Designing and Customizing Your Own Sneakers in CSS',
    slug: '/test',
    
  },
  {
    keywords: ['Web', 'AI'],
    difficulty: 'Intermediate',
    timeEstimate: '1.5 hours',
    image: 'https://picsum.photos/300/200',
    title: 'Making a Story Game with OpenAI API',
    slug: '/test'
  },
  {
    keywords: ['Web', 'AI'],
    difficulty: 'Advanced',
    timeEstimate: '2 hours',
    image: 'https://picsum.photos/300/200',
    title: 'Cloning and Coding with Voices using 11-Labs',
    slug: '/test'
  },
  {
    keywords: ['APIs'],
    difficulty: 'Intermediate',
    timeEstimate: '1 hour',
    image: 'https://picsum.photos/300/200',
    title: 'Creating and Exchanging Club Currency',
    slug: '/test'
  },
  {
    keywords: ['App'],
    difficulty: 'Beginner',
    timeEstimate: '1 hour',
    image: 'https://picsum.photos/300/200',
    title: 'Making a Custom Soundboard in SwiftUI',
    slug: '/test'
  },
  {
    keywords: ['Extension'],
    difficulty: 'Intermediate',
    timeEstimate: '2 hours',
    image: 'https://picsum.photos/300/200',
    title: 'Chrome Extension to Cheat in Kahoot (use responsibly)',
    slug: '/test'
  }
];


function Slides({router, initialFeatures}) {
  const [active, setActive] = useState(Math.floor(slides.length / 2))

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
          
          onClick={() => router.push(`/jam/${slides[0].slug}`)}
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

export default function Index(props) {
  const router = useRouter();


  console.log(props.jamsContent.singles)
  const batches = [... props.jamsContent.batches, ... props.jamsContent.batches, ... props.jamsContent.batches, ... props.jamsContent.batches]
  const jams = [... props.jamsContent.singles, ... props.jamsContent.singles, ... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles,... props.jamsContent.singles, ... props.jamsContent.singles]
  const features = [  {
    keywords: 'Web, AI',
    difficulty: 'Intermediate',
    timeEstimate: '1.5 hours',
    thumbnail: 'https://cloud-78sm4amqd-hack-club-bot.vercel.app/0image.png',
    title: 'Sample FeaturedJam',
    slug: '/test'
  },... props.jamsContent.singles, ... props.jamsContent.singles]

  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')
  const [language, setLanguage] = useState('')
  const [timeEstimate, settimeEstimate] = useState('')
  const [selected, setSelected] = useState('')

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
        <Header isHomePage={true} />
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
                {batch.keywords.split(", ")[0]}

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

