import Header from '@/components/Header'
import { Container, Grid, Link, Badge } from 'theme-ui'
import PreviewCard from '@/components/PreviewCard'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import lunr from 'lunr'

/** @jsxImportSource theme-ui */

export async function getStaticPaths() {
  const { getBatchJams } = await import('@/libs/JamsData')

  const paths = getBatchJams().map(b => b.path)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { getBatch, getAllJams } = await import('@/libs/JamsData')
  return {
    props: {
      batch: getBatch(params.slug),
      jams: getAllJams()
    }
  }
}

export default function Page({ batch, params, jams }) {
  const [query, setQuery] = useState('')

  const precision = 0.4 // arbitrary number to indicate precision of lunr

  var searchAlgorithmLunr = lunr(function () {
    this.field('title')
    this.field('description')
    this.field('body')
    this.field('contributor')
    this.field('keywords')
    this.field('slug')

    for (let jindex in jams) {
      let jam = jams[jindex]
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

  function returnResultsLunr(query) {
    let bestList = searchAlgorithmLunr.search(query.toString())

    console.log(bestList)

    let results = []

    // let concatenatedJamBatch = jams.singles.concat(jams.batches)

    for (let returnedquery in bestList) {
      if (bestList[returnedquery]['score'] >= precision) {
        console.log(bestList[returnedquery]['ref'])
        results.push(jams[bestList[returnedquery]['ref']])
      }
    }

    return results
  }

  return (
    <>
      <Meta
        as={Head}
        name={batch.title}
        title={batch.title}
        description={batch.description}
        image={batch.thumbnail}
        color="#ec3750"
      />
      <Header
        setQuery={setQuery}
        query={query}
        jams={returnResultsLunr(query)}
        back={`/`} // back is homepage regardless
      />

      <Container
        sx={{ paddingTop: '96px' }}
        style={{ maxWidth: '64rem !important' }}>
        {/* Structure: root / batch name / part */}
        <Link href="/" sx={{ color: '#993CCF', textDecoration: 'underline' }}>
          batch
        </Link>{' '}
        /{' '}
        <Link
          href={'/batch/' + batch.slug}
          sx={{ color: '#993CCF', textDecoration: 'underline' }}>
          {batch.slug}
        </Link>
      </Container>

      <Container
        as="main"
        sx={{
          px: '1rem',
          mt: '1rem'
        }}
        style={{ maxWidth: '64rem !important' }}>
        <div
          sx={{
            px: '1.5rem',
            pt: '1.5rem',
            pb: '1rem',
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            gap: ['1rem', '1rem', '2rem'],
            bg: 'rgb(229 229 229 / 0.50)',
            borderRadius: '16px'
          }}>
          <div sx={{ flex: '1 1 0%' }}>
            <img
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                objectFit: 'cover',
                borderRadius: '16px'
              }}
              src={batch.thumbnail}
            />
          </div>

          <div sx={{ width: ['auto', 'auto', '20rem'], position: 'relative' }}>
            <div>
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
                {batch.parts.length} Parts
              </Badge>

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
                {batch?.keywords[0]}
              </Badge>
              <Badge
                key="difficultyFeature"
                mr={2}
                sx={{
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  marginBottom: '8px',
                  fontSize: ['14px', 'auto']
                }}
                variant="outline"
                color="#993CCF">
                {batch.difficulty}
              </Badge>
              {/* <Badge
                key="timeFeature"
                mr={2}
                sx={{
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  marginBottom: '8px',
                  fontSize: ['14px', 'auto']
                }}
                variant="outline"
                color="#993CCF">
                {batch.timeEstimate}
              </Badge> */}
            </div>

            <h1 sx={{ m: 0, lineHeight: '2.2rem', mt: '0.25rem' }}>
              {batch.title}
            </h1>

            <Link
              href={`https://github.com/${batch.contributor}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}>
              <div
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  mt: '0.5rem'
                }}>
                <img
                  src={`https://github.com/${batch.contributor}.png`}
                  sx={{ width: '1.5rem', borderRadius: '9999px' }}
                />
                <span
                  sx={{
                    'fontWeight': 'bold',
                    'color': 'rgb(115 115 115)',
                    '&:hover': {
                      color: '#993CCF' // Set text color to purple on hover
                    }
                  }}>
                  {batch.contributor}
                </span>
              </div>
            </Link>

            <p>{batch.description}</p>
          </div>
        </div>
      </Container>

      <Container
        sx={{ mt: '3rem', pb: '4rem' }}
        style={{ maxWidth: '64rem !important' }}>
        <Grid columns={[null, '1fr 1fr 1fr']} sx={{ gap: '1rem' }}>
          {batch.parts.map(part => (
            <PreviewCard
              redirect={batch.path+ '/' + part.part}
              {...part}
              isSortable={false} // since this is false we really don't care about the 4 parameters used for sorting
              currentDifficulty={''}
              currentTime={''}
              currentCategories={[]}
            />
          ))}
        </Grid>

        {/* render other batch data here */}
      </Container>
      <Footer />
    </>
  )
}
