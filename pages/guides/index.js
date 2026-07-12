import Header from '@/components/Header'
import { Box, Image, Container, Grid, Text } from 'theme-ui'
import Footer from '@/components/Footer'
import PreviewCard from '@/components/PreviewCard'
import Link from 'next/link'

/** @jsxImportSource theme-ui */
export default function Index(props) {
  const jams = props.jams || []

  return (
    <>
        <Header
          isHomePage={true}
        />
        <Box
        sx={{
          backgroundImage:
            'linear-gradient(180deg, #3C3ACF 0%, rgba(61, 111, 204, 0.95) 17.19%, rgba(78, 155, 199, 0.90) 31.77%, rgba(127, 201, 216, 0.71) 52.08%, rgba(127, 201, 216, 0.60) 63.54%, rgba(127, 201, 216, 0) 96.88%), linear-gradient(180deg, #D9D9D9 0%, rgba(255, 255, 255, 0) 100%)',
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
            Community Guides
          </Text>
          <Box
            sx={{
              maxWidth: '48rem',
              px: [2, 4],
              py: [2, 3],
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
                These are guides spread across different events that Hack Club has run, and also created by fellow hackclubbers!
            </Text>
          </Box>
          <Link href="/" style={{ color: 'white', fontSize: '1.3rem', fontWeight: '500' }}>
            ← Head back to jams
          </Link>
        </Box>
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
            Not sure where to start?
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
            These are some favorites created for Hack Club events!
          </Text>
          <Grid
            columns={[null, '1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr']}
            gap={3}
            sx={{ pt: 4, position: 'relative' }}>
            {jams.map(jam => (
              <PreviewCard key={jam.slug} {...jam} />
            ))}
          </Grid>
        </Box>

        <Text
          as="h1"
          sx={{
            fontSize: 48,
            fontWeight: 600,
            mt: '2rem',
            lineHeight: '3.5rem',
            zIndex: 2,
          }}>
          Guides 
        </Text>
      </Container>

      <Footer />
    </>
  )
}
