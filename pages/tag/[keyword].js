import Header from '@/components/Header'
import { Box, Container, Grid, Text } from 'theme-ui'
import Footer from '@/components/Footer'
import PreviewCard from '@/components/PreviewCard'
import { useState } from 'react'

/** @jsxImportSource theme-ui */

export default function KeywordPage({ jams, keyword, emoji }) {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [difficulty, setDifficulty] = useState('')
  const [time, setTime] = useState('')
  const [query, setQuery] = useState('')

  return (
    <>
      <Header jams={jams} />

      <Box sx={{ pt: '4rem' }}></Box>

      <Container sx={{ pt: '4rem', position: 'relative', zIndex: 1 }}>
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
            Start jamming out on "{keyword}" projects {emoji}
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
            {jams.map((jam, idx) => (
              <div style={{ position: 'relative' }}>
                {jam?.sticker && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-48px', // Adjust the top distance as needed
                      right: '-48px', // Adjust the right distance as needed
                      zIndex: 1
                    }}>
                    <img
                      src={jam.sticker}
                      style={{ width: '96px', height: '96px' }}
                    />
                  </Box>
                )}
                <PreviewCard
                  style={{ cursor: 'pointer' }}
                  key={idx + jam.title}
                  light={true}
                  {...jam}
                  keywords={jam.keywords.join(', ')}
                  redirect={jam.path}
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
      </Container>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const { getAllTags } = await import('@/libs/JamsData')
  const paths = getAllTags().map(tag => {
    return {
      params: { slug: `/tag/${tag}`, keyword: tag }
    }
  })

  return { paths, fallback: false } // <= goes to 404 if nothing is found
}
export async function getStaticProps({ params }) {
  const { getFilteredJams } = await import('@/libs/JamsData')
  const { getPageEmoji } = await import('@/libs/GetPageEmoji')
  return {
    props: {
      keyword: params.keyword,
      emoji: getPageEmoji(params.keyword) || null,
      jams: getFilteredJams(params.keyword)
    }
  }
}
