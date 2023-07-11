import Header from '@/components/Header'
import { Box, Flex, Container, Grid, Heading, Text, Card } from 'theme-ui'
import { useState } from 'react'
import Footer from '@/components/Footer'
import SearchControls from '@/components/Search'
import PreviewCard from '@/components/PreviewCard'
import { useEffect } from 'react'
import { promises as fs } from 'fs'
import path from 'path'

const slides = [
  {
    title: 'How Hack Club Built an AI-Powered Comedy Club at AngelHacks',
    description:
      ' Using GPT 4.0, the game assesses your humor and rewards points and laughter based on its evaluation of your comedic skills.',
      thumbnail: 'https://cloud-n29u4mb07-hack-club-bot.vercel.app/0image.png'
  },
  {
    title: 'How Hack Club Built an AI-Powered Comedy Club at AngelHacks',
    description:
      ' Using GPT 4.0, the game assesses your humor and rewards points and laughter based on its evaluation of your comedic skills.',
    thumbnail: 'https://cloud-n29u4mb07-hack-club-bot.vercel.app/0image.png'
  },
  {
    title: 'How Hack Club Built an AI-Powered Comedy Club at AngelHacks',
    description:
      ' Using GPT 4.0, the game assesses your humor and rewards points and laughter based on its evaluation of your comedic skills.',
    thumbnail: 'https://cloud-n29u4mb07-hack-club-bot.vercel.app/0image.png'
  }
]

const fakeJams = [
  {
    tags: ['Web'],
    difficulty: 'Easy',
    timelength: [45, 'minutes'],
    image: 'https://picsum.photos/300/200',
    title: 'Designing and Customizing Your Own Sneakers in CSS',
    slug: '/test'
  },
  {
    tags: ['Web', 'AI'],
    difficulty: 'Moderate',
    timelength: [1.5, 'hours'],
    image: 'https://picsum.photos/300/200',
    title: 'Making a Story Game with OpenAI API',
    slug: '/test'
  },
  {
    tags: ['Web', 'AI'],
    difficulty: 'Difficult',
    timelength: [2, 'hours'],
    image: 'https://picsum.photos/300/200',
    title: 'Cloning and Coding with Voices using 11-Labs',
    slug: '/test'
  },
  {
    tags: ['APIs'],
    difficulty: 'Moderate',
    timelength: [1, 'hours'],
    image: 'https://picsum.photos/300/200',
    title: 'Creating and Exchanging Club Currency',
    slug: '/test'
  },
  {
    tags: ['Mobile App Development'],
    difficulty: 'Easy',
    timelength: [1, 'hours'],
    image: 'https://picsum.photos/300/200',
    title: 'Making a Custom Soundboard in SwiftUI',
    slug: '/test'
  },
  {
    tags: ['Chrome Extension'],
    difficulty: 'Moderate',
    timelength: [2, 'hours'],
    image: 'https://picsum.photos/300/200',
    title: 'Chrome Extension to Cheat in Kahoot (use responsibly)',
    slug: '/test'
  }
]

function Slides() {
  const [active, setActive] = useState(Math.floor(slides.length / 2))

  return (
    <Container sx={{ py: 4, display: 'flex', flexWrap: 'nowrap' }}>
      {slides.map((slide, idx) => (
        <Card
          key={idx}
          sx={{
            background: `linear-gradient(180deg, rgba(70, 10, 105, 0.60) 0%, rgba(70, 10, 105, 0.00) 36.98%, rgba(49, 7, 74, 0.39) 59.90%, rgba(56, 10, 83, 0.60) 100%), url("${slide.background}"), lightgray 50% / cover no-repeat, #686868`,
            backgroundSize: 'cover',
            boxShadow: '0px -4px 64px 0px rgba(240, 146, 75, 0.50)',
            color: 'white',
            border: '4px solid white',
            textAlign: 'left',
            height: '50vh',
            width: '50vw',
            flexShrink: '0'
          }}>
          <Text as="h2" sx={{ fontSize: 36, lineHeight: 1 }}>
            {slide.title}
          </Text>
        </Card>
      ))}
    </Container>
  )
}

export default function Index() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')
  const [language, setLanguage] = useState('')
  const [timelength, setTimelength] = useState('')
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
          height: '100%'
        }}>
        <Box
          sx={{
            background:
              'url(/assets/main-texture.svg), lightgray 0% 0% / 40.00000059604645px 40.00000059604645px repeat',
            backgroundBlendMode: 'color-burn',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: '0',
            zIndex: -1
          }}
        />
        <Header />
        <Box
          sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Text
            as="h1"
            sx={{
              fontFamily: 'var(--heading)',
              fontSize: 96,
              textShadow: '0px 0px 64px 0px rgba(56, 10, 83, 0.75)',
              mb: 0,
              lineHeight: 1,
              fontWeight: 400
            }}>
            Code Jams
          </Text>
          <Container variant="narrow">
            <Text
              sx={{
                textShadow: '0px 0px 32px 0px rgba(56, 10, 83, 0.50)',
                fontSize: 24,
                mt: 0,
                lineHeight: 1.2
              }}>
              Collaborative coding workshops where sparks ignite, fears
              dissolve, and inventions come to life.
            </Text>
          </Container>
          <Slides />
        </Box>
      </Box>
      <Container sx={{ marginTop: '0px' }}>
        <Text as="h1" sx={{ fontSize: 48, fontWeight: 600 }}>
          Jams
        </Text>
        <Text sx={{ fontSize: 24 }}>
          Batch Jams{' '}
          <Text
            sx={{
              fontStyle: 'italic',
              color: 'var(--text-purple)',
              verticalAlign: 'text-end'
            }}>
            (multi-part workshops)
          </Text>
        </Text>
      </Container>
      <Container>
        <Text sx={{ fontSize: 24 }}>
          Single Jams{' '}
          <Text
            sx={{
              fontStyle: 'italic',
              color: 'var(--text-purple)',
              verticalAlign: 'text-end'
            }}>
            (single-part workshops)
          </Text>
        </Text>
        <SearchControls
          query={query}
          setQuery={setQuery}
          filter={filter}
          setFilter={setFilter}
          language={language}
          setLanguage={setLanguage}
          timelength={timelength}
          setTimelength={setTimelength}
        />
        <Grid columns={[null, '1fr 1fr 1fr 1fr']} gap={3} sx={{ py: 3 }}>
          {fakeJams.map((jam, idx) => (
            <PreviewCard key={idx} light={true} {...jam} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}


const isMarkdownFile = fileName => path.extname(fileName) === '.md'

async function getFiles(dirPath) {
  let entries = await fs.readdir(dirPath, { withFileTypes: true })
  let files = entries
    .filter(fileEnt => fileEnt.isFile() && isMarkdownFile(fileEnt.name))
    .map(fileEnt => path.join(dirPath, fileEnt.name))
  let folders = entries.filter(folderEnt => folderEnt.isDirectory())
  for (let folder of folders) {
    files = files.concat(await getFiles(path.join(dirPath, folder.name)))
  }
  return files
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'jams')
  const fileNames = await getFiles(postsDirectory)

  const files = await Promise.all(
    fileNames.map(async filePath => {
      const fileContents = await fs.readFile(filePath, 'utf8')

      const filePathArray = filePath.split('/')
      filePathArray.splice(0, filePathArray.indexOf('jams') + 1)

      return {
        filePath: filePathArray,
        fileName: path.basename(filePath),
        content: fileContents
      }
    })
  )

  return {
    props: {
      files: files
    }
  }
}

export function getMetaContent(entireFile) {
  const removingStartingDashes = entireFile.split('---')

  const metaData = removingStartingDashes[1].split('\n')
  const keyValuePairs = []
  for (const dataSegment of metaData) {
    if (dataSegment !== '') {
      const dataSegmentSplit = dataSegment.split(':')
      const keyData = dataSegmentSplit[0]
      let valueData = dataSegmentSplit
        .slice(1)
        .join(':')
        .replace(/'/g, '')
        .slice(1)

      if (keyData == 'keywords') {
        valueData = valueData.split(', ')
      }
      keyValuePairs.push([keyData, valueData])
    }
  }

  return keyValuePairs
}
