import { Container, Image, Link } from 'theme-ui'
import Icon from '@hackclub/icons'

export default function Header() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <Image src="/assets/flag.svg" />
      <Image src="/assets/jam.svg" sx={{ mt: 2, width: '50px' }} />
      <Link
        href="https://github.com/hackclubs/jams"
        target="_blank"
        style={{marginLeft: "110px"}}
        sx={{ color: 'white' }}>
        <Icon glyph="github" />
      </Link>
    </Container>
  )
}
