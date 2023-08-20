import Header from '@/components/Header'
import {
  Box,
  Image,
  Flex,
  Badge,
  Container,
  Grid,
  Heading,
  Text,
  Card
} from 'theme-ui'
import Footer from '@/components/Footer'
import SearchControls from '@/components/Search'
import PreviewCard from '@/components/PreviewCard'
import { useEffect, useState, useRef } from 'react'
import Icon from '@hackclub/icons'
import { useRouter } from 'next/router'
import lunr from 'lunr'

import path from 'path'
import matter from 'gray-matter'

/** @jsxImportSource theme-ui */

export async function getStaticProps() {
  const fs = require('fs')

  const jamsDir = path.join(process.cwd(), 'jams')

  const jamsContent = {
    singles: getJams(fs, path.join(jamsDir, 'singles')),
    batches: getBatches(fs, path.join(jamsDir, 'batches'))
  }
  return {
    props: { jamsContent }
  }
}

function getJams(fs, directory) {
  const filenames = fs.readdirSync(directory)

  return filenames.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(directory, filename, 'en-US.md'),
      'utf8'
    )
    const { data, content } = matter(fileContent)

    return {
      ...data, // Spread the properties from the data object
      content
    }
  })
}

function getBatches(fs, directory) {
  const batchNames = fs.readdirSync(directory)

  return batchNames.map(batchName => {
    const batchDirectory = path.join(directory, batchName)
    const readMeFileContent = fs.readFileSync(
      path.join(batchDirectory, 'readMe', 'en-US.md'),
      'utf8'
    )
    const { data: readMeData, content: readMeContent } =
      matter(readMeFileContent)

    const partsDirectory = path.join(batchDirectory)
    const partsNames = fs
      .readdirSync(partsDirectory)
      .filter(part => part.startsWith('part'))
    partsNames.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

    const parts = partsNames.map(partName => {
      const partContent = fs.readFileSync(
        path.join(partsDirectory, partName, 'en-US.md'),
        'utf8'
      )
      const { data, content } = matter(partContent)

      return {
        ...data, // Spread the properties from the data object
        content
      }
    })

    return {
      ...readMeData, // Spread the properties from the readMeData object
      content: readMeContent,
      parts
    }
  })
}

function Slides({ router, initialFeatures }) {
  // const [active, setActive] = useState(Math.floor(initialFeatures.length / 2))

  const [features, setFeatures] = useState(initialFeatures)
  const [active, setActive] = useState(null)
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  const handleScroll = () => {
    const container = containerRef.current
    const scroll =
      container.getBoundingClientRect().left +
      container.getBoundingClientRect().width / 2

    let minDistance = Infinity
    let currentIndex = 0

    cardsRef.current.forEach((card, i) => {
      const rect = card.getBoundingClientRect()
      const center = rect.left + rect.width / 2
      const distance = Math.abs(center - scroll)

      if (distance < minDistance) {
        minDistance = distance
        currentIndex = i
      }
    })

    setActive(currentIndex)
  }

  useEffect(() => {
    // set scroll position to the second card
    containerRef.current.scrollLeft =
      cardsRef.current[1].offsetLeft +
      cardsRef.current[1].offsetWidth / 2 -
      containerRef.current.offsetWidth / 2

    containerRef.current.addEventListener('scroll', handleScroll)
    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // function moveRight() {
  //   const copyOfFeatures = [...features]

  //   const firstValue = copyOfFeatures.shift()
  //   copyOfFeatures.push(firstValue)

  //   setFeatures(copyOfFeatures)
  // }

  // function moveLeft() {
  //   const copyOfFeatures = [...features]

  //   const lastValue = copyOfFeatures.pop()
  //   copyOfFeatures.unshift(lastValue)

  //   setFeatures(copyOfFeatures)
  // }

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box
        sx={{
          height: ['12rem', '18rem', '18rem'],
          px: [
            'calc(50% - 10.667rem + 6rem)',
            'calc(50% - 16rem + 6rem)',
            'calc(50% - 16rem + 6rem)'
          ],
          display: 'flex',
          position: 'relative',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory'
        }}
        className="hide-scrollbar"
        ref={containerRef}>
        {features.map((jam, i) => (
          <div
            ref={el => (cardsRef.current[i] = el)}
            style={{
              height: '100%',
              aspectRatio: '16 / 9',
              borderRadius: '16px',
              scrollSnapAlign: 'center',
              scrollSnapStop: 'always',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginLeft: '-6rem',
              marginRight: '-6rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              zIndex: active === i ? 1 : 0,
              filter: `brightness(${active === i ? 1 : 0.75})`,
              transitionProperty: 'filter',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDuration: '200ms'
            }}>
            <a
              href={active === i ? `./jam/${jam.slug}` : null}
              onClick={() => {
                if (active === i) return
                containerRef.current.scrollTo({
                  left:
                    cardsRef.current[i].offsetLeft -
                    cardsRef.current[0].offsetLeft,
                  behavior: 'smooth'
                })
              }}
              style={{
                color: '#fff',
                width: '100%',
                aspectRatio: '16 / 9',
                maxWidth: 'calc(100vw - 2rem)',
                boxShadow: '0px -4px 64px 0px rgba(240, 146, 75, 0.50)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                backgroundImage:
                  active === i
                    ? `linear-gradient(180deg, rgba(70, 10, 105, 0.60) 0%, rgba(70, 10, 105, 0.00) 36.98%, rgba(49, 7, 74, 0.39) 59.90%, rgba(56, 10, 83, 0.60) 100%), url("${jam.thumbnail}")`
                    : `url("${jam.thumbnail}")`,
                border: active === i ? '4px solid #fff' : 'none',
                transform: `scale(${active === i ? 1 : 0.75})`,
                transitionProperty: 'transform, border, background-image',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: '200ms',
                borderRadius: '16px'
              }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: ['0.75rem', '0.75rem', '1rem'],
                  left: ['1rem', '1rem', '1.5rem'],
                  right: ['1rem', '1rem', '1.5rem'],
                  zIndex: 1,
                  display: 'flex',
                  flexWrap: 'wrap'
                }}
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: `scale(${active === i ? 1 : 0.75})`,
                  transitionProperty: 'opacity, transform',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: '100ms'
                }}>
                {jam.parts?.length && (
                  <Badge
                    key="partFeature"
                    mr={2}
                    sx={{
                      cursor: 'pointer',
                      backgroundColor: '#993CCF',
                      marginBottom: '8px',
                      fontSize: ['14px', 'auto']
                    }}
                    variant="outline"
                    color="#fff">
                    {jam.parts.length} Parts
                  </Badge>
                )}

                <Badge
                  key="keywordFeature"
                  mr={2}
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: '#fff',
                    marginBottom: '8px',
                    fontSize: ['14px', 'auto']
                  }}
                  variant="outline"
                  color="#993CCF">
                  {jam.keywords.split(', ')[0]}
                </Badge>
                <Badge
                  key="difficultyFeature"
                  mr={2}
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: '#fff',
                    marginBottom: '8px',
                    fontSize: ['14px', 'auto']
                  }} // Adjust '4px' as needed
                  variant="outline"
                  color="#993CCF">
                  {jam.difficulty}
                </Badge>
                {!jam.parts && (
                  <Badge
                    key="timeFeature"
                    mr={2}
                    sx={{
                      cursor: 'pointer',
                      backgroundColor: '#fff',
                      marginBottom: '8px',
                      fontSize: ['14px', 'auto']
                    }} // Adjust '4px' as needed
                    variant="outline"
                    color="#993CCF">
                    {jam.timeEstimate}
                  </Badge>
                )}
              </Box>

              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  zIndex: 1,
                  opacity: active === i ? 1 : 0,
                  transform: `scale(${active === i ? 1 : 0.75})`,
                  transitionProperty: 'opacity, transform',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: '200ms'
                }}>
                <h2 style={{ fontSize: 28, lineHeight: '2rem', margin: 0 }}>
                  {jam.title}
                </h2>
              </div>
            </a>

            <button
              style={{
                position: 'absolute',
                cursor: 'pointer',
                left: 0,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '9999px',
                background: '#fff',
                color: '#993CCF',
                padding: 0,
                border: 0,
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                pointerEvents: active === i && i > 0 ? 'auto' : 'none',
                opacity: active === i && i > 0 ? 1 : 0,
                transitionProperty: 'opacity',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: '200ms'
              }}
              onClick={() => {
                if (!(active === i && i > 0)) return
                containerRef.current.scrollTo({
                  left:
                    cardsRef.current[i - 1].offsetLeft -
                    cardsRef.current[0].offsetLeft,
                  behavior: 'smooth'
                })
              }}>
              <Icon glyph="view-back" size={42} style={{ display: 'block' }} />
            </button>

            <button
              style={{
                position: 'absolute',
                cursor: 'pointer',
                right: 0,
                top: '50%',
                transform: 'translate(50%, -50%)',
                borderRadius: '9999px',
                background: '#fff',
                color: '#993CCF',
                padding: 0,
                border: 0,
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                pointerEvents:
                  active === i && i < cardsRef.current.length - 1
                    ? 'auto'
                    : 'none',
                opacity:
                  active === i && i < cardsRef.current.length - 1 ? 1 : 0,
                transitionProperty: 'opacity',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: '200ms'
              }}
              onClick={() => {
                if (!(active === i && i < cardsRef.current.length - 1)) return
                containerRef.current.scrollTo({
                  left:
                    cardsRef.current[i + 1].offsetLeft -
                    cardsRef.current[0].offsetLeft,
                  behavior: 'smooth'
                })
              }}>
              <Icon
                glyph="view-forward"
                size={42}
                style={{ display: 'block' }}
              />
            </button>
          </div>
        ))}
      </Box>
    </Box>
  )
}

function useStickyCategoryBar() {
  const [isCategoryBarSticky, setCategoryBarSticky] = useState(false)

  const handleScroll = () => {
    const headerHeight = 950 // Adjust this value based on the header's height
    const scrollTop = window.scrollY
    setCategoryBarSticky(scrollTop >= headerHeight)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isCategoryBarSticky
}

export default function Index(props) {
  const isCategoryBarSticky = useStickyCategoryBar()

  const categories = ['Web', 'Game', 'Crypto', '3D', 'AI']
  const [selectedCategories, setSelectedCategories] = useState([])
  const [query, setQuery] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [time, setTime] = useState('')
  const [viewed, setViewed] = useState([])

  const [filter, setFilter] = useState('')
  const [language, setLanguage] = useState('')
  const [timeEstimate, settimeEstimate] = useState('')
  const [selected, setSelected] = useState('')

  const router = useRouter()

  const precision = 0.4 // indicates lunr precision

  function searchLunr(query, list) {
    var searchAlgorithmLunr = lunr(function () {
      this.field('title')
      this.field('description')
      this.field('body')
      this.field('contributor')
      this.field('keywords')
      this.field('slug')

      for (let jindex in list) {
        let jam = list[jindex]
        this.add({
          title: jam.title,
          description: jam.description,
          body: jam.body,
          contributor: jam.contributor,
          keywords: jam.keywords,
          slug: jam.slug,
          object: jam,
          id: jindex
        })
      }
    })

    let bestList = searchAlgorithmLunr.search(query.toString())

    console.log(bestList)

    let results = []

    for (let returnedquery in bestList) {
      if (bestList[returnedquery]['score'] >= precision) {
        results.push(list[bestList[returnedquery]['ref']])
      }
    }

    return results
  }

  const batches =
    query.trim() == '' // if query is blank
      ? props.jamsContent.batches.filter(batch => {
          
        if (batch.keywords.split(', ').includes('Beta')) {
          return false
        }
        if (
          !selectedCategories.some(keyword =>
            batch.keywords.split(', ').includes(keyword)
          ) &&
          selectedCategories != ''
        ) {
          return false
        }

          // otherwise use lunr and then filter additionally
          // additional false conditions:
          if (
            !selectedCategories.some(keyword =>
              batch.keywords.split(', ').includes(keyword)
            ) &&
            selectedCategories != ''
          ) {
            return false
          }

          if (
            batch.difficulty.toLowerCase() != difficulty &&
            difficulty != ''
          ) {
            return false
          }

          if (batch.timeEstimate != time && time != '') {
            return false
          }

          return true
        }) // hasnt started search yet, return all
      : searchLunr(query, props.jamsContent.batches.filter(batch => {
          
        if (batch.keywords.split(', ').includes('Beta')) {
          return false
        }
        if (
          !selectedCategories.some(keyword =>
            batch.keywords.split(', ').includes(keyword)
          ) &&
          selectedCategories != ''
        ) {
          return false
        }

          // otherwise use lunr and then filter additionally
          // additional false conditions:
          if (
            !selectedCategories.some(keyword =>
              batch.keywords.split(', ').includes(keyword)
            ) &&
            selectedCategories != ''
          ) {
            return false
          }

          if (
            batch.difficulty.toLowerCase() != difficulty &&
            difficulty != ''
          ) {
            return false
          }

          if (batch.timeEstimate != time && time != '') {
            return false
          }

          return true
        })
        
        
        )

  const jams =
    query.trim() == '' // if query is blank
      ? props.jamsContent.singles.filter(jam => {
        // otherwise use lunr and then filter additionally
        // additional false conditions:
        if (jam.keywords.split(', ').includes('Beta')) {
          return false
        }
        if (
          !selectedCategories.some(keyword =>
            jam.keywords.split(', ').includes(keyword)
          ) &&
          selectedCategories != ''
        ) {
          return false
        }

        if (jam.difficulty.toLowerCase() != difficulty && difficulty != '') {
          return false
        }

        if (jam.timeEstimate != time && time != '') {
          return false
        }

        return true
      }) // hasnt started search yet, return all
      : searchLunr(query, props.jamsContent.singles
        .filter(jam => {
          // otherwise use lunr and then filter additionally
          // additional false conditions:
          if (jam.keywords.split(', ').includes('Beta')) {
            return false
          }
          if (
            !selectedCategories.some(keyword =>
              jam.keywords.split(', ').includes(keyword)
            ) &&
            selectedCategories != ''
          ) {
            return false
          }

          if (jam.difficulty.toLowerCase() != difficulty && difficulty != '') {
            return false
          }

          if (jam.timeEstimate != time && time != '') {
            return false
          }

          return true
        })
        )

  const desiredSlugs = ['ai-travel', 'online-store', 'voxel-animation']
  const features = props.jamsContent.singles.filter(jam =>
    desiredSlugs.includes(jam.slug)
  )

  const desiredSlugsBatches = ['sprig', 'webOS', 'artificial-intelligence']
  const fallFeatures = props.jamsContent.batches.filter(batch =>
    desiredSlugsBatches.includes(batch.slug)
  )

  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    if (localStorage.getItem('viewed'))
      setViewed(
        JSON.parse(localStorage.getItem('viewed')).map(jam => ({
          ...jam,
          keywords: jam.keywords.split(', ')
        }))
      )
    const onScroll = () => setScrollPosition(window.pageYOffset)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header
        jams={jams.concat(batches)}
        query={query}
        setQuery={setQuery}
        isHomePage={true}
      />

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
            position: 'absolute',
            top: 0,
            left: '0',
            zIndex: -1
          }}
        />
        <Image
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            mixBlendMode: 'color-burn'
          }}
          src="https://cloud-omdlqtlig-hack-club-bot.vercel.app/0rectangle_60.png"
        />

        <Box
          sx={{
            p: 4,
            textAlign: 'center',
            marginTop: '64px',
            position: 'relative',
            zIndex: 2,
            maxWidth: '760px'
          }}>
          <Text
            as="h1"
            sx={{
              fontFamily: 'var(--heading)',
              fontSize: [48, 56, 56],
              textShadow: '0px 0px 64px 0px rgba(56, 10, 83, 0.75)',
              mb: 0,
              mt: 0,
              lineHeight: 1,
              fontWeight: 400
            }}>
            Code Jams
          </Text>
          <Box
            sx={{
              maxWidth: '48rem',
              px: [2, 4],
              py: [2, 2],
              textAlign: 'center'
            }}>
            <Text
              sx={{
                textShadow: '0px 0px 32px 0px rgba(56, 10, 83, 0.50)',
                fontSize: [16, 18, 22],
                mt: 0,
                lineHeight: 1.2,
                pt: 0,
                px: 3
              }}>
              Collaborative coding workshops where sparks ignite, fears
              dissolve, and inventions come to life.
            </Text>
          </Box>
        </Box>

        <Slides initialFeatures={features} router={router} />
      </Box>

      <Container sx={{ marginTop: '-4rem', position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            backgroundColor: '#FDF5EC',
            border: '1px solid #F0924B',
            padding: ['16px', '24px', '32px'],
            borderRadius: '16px'
          }}>
          <Text
            as="h2"
            sx={{
              fontSize: [24, 32, 42],
              lineHeight: 1.2,
              fontWeight: 600,
              margin: 0,
              p: 0,
              zIndex: 2
            }}>
            New to Jams? Start Jamming! 🍁
          </Text>
          <Text
            as="h2"
            sx={{
              fontSize: [18, 18, 24],
              fontWeight: 400,
              margin: 0,
              p: 0,
              zIndex: 2
            }}>
            Here are some great multi-part jams to kickoff your club this fall
            🍂{' '}
          </Text>
          <Grid
            columns={[null, '1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr']}
            gap={3}
            sx={{ pt: 4, position: 'relative' }}>
            {fallFeatures.reverse().map((fallFeature, idx) => (
              <div style={{ position: 'relative' }}>
                {fallFeature.sticker && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-48px', // Adjust the top distance as needed
                      right: '-48px', // Adjust the right distance as needed
                      zIndex: 1
                    }}>
                    <img
                      src={fallFeature.sticker}
                      style={{ width: '96px', height: '96px' }}
                    />
                  </Box>
                )}
                <PreviewCard
                  style={{ cursor: 'pointer' }}
                  key={idx + fallFeature.title}
                  light={true}
                  {...fallFeature}
                  redirect={'/batch/' + fallFeature.slug}
                  isSortable={true}
                  currentDifficulty={difficulty}
                  currentTime={time}
                  currentCategories={selectedCategories}
                  modifyDifficulty={setDifficulty}
                  modifyTime={setTime}
                  modifyCategories={setSelectedCategories}
                />
              </div>
            ))}
          </Grid>
        </Box>

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

        <Box
          sx={{
            display: ['none', 'none', 'none', 'flex'],
            top: 'calc(4rem + 4px)',
            backgroundColor: '#fff',
            zIndex: 3,
            left: 0,
            backdropFilter: 'blur(5px)',
            right: 0,
            cursor: 'pointer',
            position: 'fixed',
            flexDirection: 'row',
            borderColor: '#e0e6ed',
            borderTop: '1px solid #e0e6ed',
            borderBottom: '1px solid #e0e6ed'
          }}
          style={{
            pointerEvents: isCategoryBarSticky ? 'auto' : 'none',
            opacity: isCategoryBarSticky ? 1 : 0,
            backgroundColor: isCategoryBarSticky
              ? 'rgba(200,200,200,0.75)'
              : 'transparent',
            transitionProperty: 'opacity, background-color',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '500ms'
          }}>
          <Container
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <Box>
              <Badge
                key="all"
                mr={2}
                sx={{
                  cursor: 'pointer',
                  backgroundColor:
                    selectedCategories == '' ? '#993CCF' : '#fff',
                  marginTop: '8px',
                  marginBottom: '8px',
                  fontSize: ['14px', 'auto']
                }}
                variant="outline"
                color={selectedCategories == '' ? '#fff' : '#993CCF'}
                onClick={() => {
                  setSelectedCategories([])
                }}>
                All
              </Badge>
              {categories.map(category => (
                <Badge
                  key={category}
                  mr={2}
                  sx={{
                    backgroundColor: selectedCategories.includes(category)
                      ? '#993CCF'
                      : '#fff',
                    marginTop: '8px',
                    marginBottom: '8px',
                    fontSize: ['14px', 'auto']
                  }}
                  variant="outline"
                  color={
                    selectedCategories.includes(category) ? '#fff' : '#993CCF'
                  }
                  onClick={() =>
                    setSelectedCategories(currentCategories => {
                      if (currentCategories.includes(category)) {
                        return currentCategories.filter(cat => cat !== category)
                      } else {
                        const updatedCategories = [
                          ...currentCategories,
                          category
                        ]
                        return updatedCategories
                      }
                    })
                  }>
                  {category}
                </Badge>
              ))}
            </Box>
            <Box style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
              <Box
                style={{
                  display: 'flex',
                  gap: '8px',
                  backgroundColor: '#fff',
                  padding: '4px 8px',
                  borderRadius: '8px'
                }}>
                <span
                  style={{
                    'backgroundColor': difficulty === '' ? '#993CCF' : '#fff',
                    'margin': '0px',
                    'padding': '0px 8px',
                    'color': difficulty === '' ? '#fff' : '#000',
                    'borderRadius': '4px',
                    'cursor': 'pointer',
                    ':hover': {
                      backgroundColor: difficulty === '' ? '#993CCF' : '#EFEFEF'
                    }
                  }}
                  onClick={() => setDifficulty('')}>
                  Any
                </span>
                <Text
                  sx={{
                    'backgroundColor':
                      difficulty === 'beginner' ? '#993CCF' : '#fff',
                    'margin': '0px',
                    'padding': '0px 4px',
                    'color': difficulty === 'beginner' ? '#fff' : '#000',
                    'borderRadius': '4px',
                    'cursor': 'pointer',
                    'transition': 'background-color 0.3s, color 0.3s',
                    ':hover': {
                      backgroundColor:
                        difficulty === 'beginner' ? '#993CCF' : '#EFEFEF'
                    }
                  }}
                  onClick={() => setDifficulty('beginner')}>
                  Beginner
                </Text>
                <Text
                  sx={{
                    'backgroundColor':
                      difficulty === 'intermediate' ? '#993CCF' : '#fff',
                    'margin': '0px',
                    'padding': '0px 4px',
                    'color': difficulty === 'intermediate' ? '#fff' : '#000',
                    'borderRadius': '4px',
                    'cursor': 'pointer',
                    'transition': 'background-color 0.3s, color 0.3s',
                    ':hover': {
                      backgroundColor:
                        difficulty === 'intermediate' ? '#993CCF' : '#EFEFEF'
                    }
                  }}
                  onClick={() => setDifficulty('intermediate')}>
                  Intermediate
                </Text>
                <Text
                  sx={{
                    'backgroundColor':
                      difficulty === 'advanced' ? '#993CCF' : '#fff',
                    'margin': '0px',
                    'padding': '0px 4px',
                    'color': difficulty === 'advanced' ? '#fff' : '#000',
                    'borderRadius': '4px',
                    'cursor': 'pointer',
                    'transition': 'background-color 0.3s, color 0.3s',
                    ':hover': {
                      backgroundColor: '#EFEFEF'
                    },
                    ':hover': {
                      backgroundColor:
                        difficulty === 'advanced' ? '#993CCF' : '#EFEFEF'
                    }
                  }}
                  onClick={() => setDifficulty('advanced')}>
                  Advanced
                </Text>
              </Box>

              <Box
                style={{
                  display: 'flex',
                  gap: '8px',
                  backgroundColor: '#fff',
                  padding: '4px 8px',
                  borderRadius: '8px'
                }}>
                <span
                  style={{
                    'backgroundColor': time === '' ? '#993CCF' : '#fff',
                    'margin': '0px',
                    'padding': '0px 8px',
                    'color': time === '' ? '#fff' : '#000',
                    'borderRadius': '4px',
                    'cursor': 'pointer',
                    ':hover': {
                      backgroundColor: time === '' ? '#993CCF' : '#EFEFEF'
                    }
                  }}
                  onClick={() => setTime('')}>
                  Any
                </span>
                <Text
                  sx={{
                    'backgroundColor': time === '30 Min' ? '#993CCF' : '#fff',
                    'margin': '0px',
                    'padding': '0px 4px',
                    'color': time === '30 Min' ? '#fff' : '#000',
                    'borderRadius': '4px',
                    'cursor': 'pointer',
                    'transition': 'background-color 0.3s, color 0.3s',
                    ':hover': {
                      backgroundColor: time === '30 Min' ? '#993CCF' : '#EFEFEF'
                    }
                  }}
                  onClick={() => setTime('30 Min')}>
                  30 Min
                </Text>
                {/* <Text
                  sx={{
                    'backgroundColor': time === '45 Min' ? '#993CCF' : '#fff',
                    'margin': '0px',
                    'padding': '0px 4px',
                    'color': time === '60 Min' ? '#fff' : '#000',
                    'borderRadius': '4px',
                    'cursor': 'pointer',
                    'transition': 'background-color 0.3s, color 0.3s',
                    ':hover': {
                      backgroundColor: time === '45 Min' ? '#993CCF' : '#EFEFEF'
                    }
                  }}
                  onClick={() => setTime('45 Min')}>
                  45 Min
                </Text> */}
                <Text
                  sx={{
                    'backgroundColor': time === '60 Min' ? '#993CCF' : '#fff',
                    'margin': '0px',
                    'padding': '0px 4px',
                    'color': time === '60 Min' ? '#fff' : '#000',
                    'borderRadius': '4px',
                    'cursor': 'pointer',
                    'transition': 'background-color 0.3s, color 0.3s',
                    ':hover': {
                      backgroundColor: time === '60 Min' ? '#993CCF' : '#EFEFEF'
                    }
                  }}
                  onClick={() => setTime('60 Min')}>
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

        <Text
          as="h1"
          sx={{
            fontSize: 48,
            fontWeight: 600,
            mt: '2rem',
            lineHeight: '3.5rem',
            zIndex: 2
          }}>
          Jams
        </Text>

        <Text style={{ width: '100' }}>
          {jams.length + batches.length != 0 ? (
            <p sx={{ m: 0 }}>{jams.length + batches.length} Jams Found</p>
          ) : (
            <p sx={{ m: 0 }}>No Results Found</p>
          )}
        </Text>
        <Grid
          columns={[null, '1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr']}
          gap={3}
          sx={{ pt: 3, pb: '4rem', mt: '1rem' }}>
          {[...jams, ...batches]
            .sort((a, b) => {
              // Determine which one is closer to the user's viewed jams
              if (!viewed.length) return 0 // Don't sort if no jams have been viewed
              const close = (jam, viewed) => {
                let match = 0
                let keywords = jam.keywords.split(', ')
                viewed.map((viewedJam, i) => {
                  if (viewedJam.difficulty === jam.difficulty) match++
                  if (viewedJam.language === jam.language) match++
                  if (viewedJam.timeEstimate === jam.timeEstimate) match++
                  if (viewedJam.title !== jam.title)
                    viewedJam.keywords.map((kw, i) => {
                      if (keywords.includes(kw)) match += i
                    })
                })
                return match
              }
              if (close(a, viewed) > close(b, viewed)) return -1 // a is closer to viewed jams than b is
              return 1
            })
            .map((jam, idx) => (
              <PreviewCard
                style={{ cursor: 'pointer' }}
                key={idx + jam.title}
                light={true}
                {...jam}
                redirect={(jam?.isBatch ? '/batch/' : '/jam/') + jam.slug}
                isSortable={true}
                currentDifficulty={difficulty}
                currentTime={time}
                currentCategories={selectedCategories}
                modifyDifficulty={setDifficulty}
                modifyTime={setTime}
                modifyCategories={setSelectedCategories}
              />
            ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}
