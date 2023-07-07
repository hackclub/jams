import Header from '@/components/Header'
import Prose from '@/components/Prose'
import { Box, Container, Text } from 'theme-ui'

export default function Jam() {
  return (
    <>
      <Box sx={{ borderBottom: '1px solid #E1E6EC', pb: 2 }}>
        <Header />
      </Box>
      <Container variant="copy" sx={{ py: 4 }}>
        <Text as="h1" sx={{ fontSize: 64, lineHeight: 1, fontWeight: '600' }}>
          Designing Your Personal Digitial Identity in Figma
        </Text>
        <Prose
          sx={{
            fontSize: '1.5rem',
            lineHeight: 1,
            fontWeight: '400',
            color: 'rgba(62, 72, 87, 0.80)'
          }}>
          <p>
            Discover the power of Figma as you embark on a journey to create
            your own personal website from scratch. Unleash your creativity and
            express your unique identity through stunning designs, while
            mastering the fundamentals of web development along the way. Get
            ready to bring your digital presence to life!
          </p>
          <p>
            We will embark on an exploration of the dynamic realm of digital
            design through Figma. Before delving into the creation of our own
            websites, it is crucial to understand the significance of drawing
            inspiration and acquainting ourselves with diverse design styles.
            This process will play a pivotal role in shaping our digital
            identities and crafting visually compelling websites that truly
            reflect our vision and purpose.
          </p>
          <p>
            To kickstart our journey, we will examine personal websites crafted
            by talented Hack Clubbers. By analyzing and taking notes on these
            sites, we can gain valuable insights into effective design elements,
            user experiences, and creative approaches. This exercise will help
            us refine our own design choices and enable us to create personal
            websites that are engaging, unique, and aligned with our individual
            goals and aspirations.
          </p>
        </Prose>
      </Container>
    </>
  )
}
