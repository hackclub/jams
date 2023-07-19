import { Container, Box, Input, Image, Link } from 'theme-ui'
import Icon from '@hackclub/icons'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Header({ isHomePage = false, back }) {
  const [query, setQuery] = useState('')
  const [scrollPosition, setScrollPosition] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 5,
        pb: 1,
        backdropFilter: 'blur(5px)',
        backgroundColor: `rgba(240, 240, 240, ${Math.min(scrollPosition / 75, 0.75)})`,
        width: '100vw',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {isHomePage ?
        (<Image src="/assets/flag.svg" />) :
        (<Box sx={{height: '84px', alignItems: "center", justifyContent: "center", display: "flex"}}>
          
          <div 
  style={{
    display: 'flex',
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '32px',
    border: '1px solid #8492a6',
    cursor: 'pointer', 
    color: "#3c4858"
  }} 
  onClick={() => 
  {if (back == undefined) {

  
  router.back()
} else {
  router.push(back)
}
}
  
  }
>
  <Icon 
    glyph="view-back" 
    style={{
      height: '24px', 
      padding: '0px'
    }}
  />
  <span>Back</span>
</div>

        </Box>)}
        <Box
          sx={{
            px: 16,
            width: '256px',
            display: ['none', 'flex'],
            border: isHomePage ? ('1px solid #993CCF') : ('1px solid #8492a6'),
            borderRadius: '32px',
            backgroundColor: '#fff',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          
          <Icon glyph="search" color={isHomePage ? ("#993CCF") : ("#3c4858")} />
          <Input
            sx={{
              border: 'none',
              '&:focus': {
                outline: 'none',
                boxShadow: 'none',
              },
            }}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for Raspberry Jam"
          />
        </Box>

        <Link
          href="https://github.com/hackclubs/jams"
          target="_blank"
          style={{ marginLeft: '110px' }}
          sx={{ 
            color: isHomePage ? 
              `rgba(calc(255 - ${scrollPosition}), calc(255 - ${scrollPosition}), calc(255 - ${scrollPosition}), 1)` : 
              '#000'
           }}
        >
          <Icon glyph="github" />
        </Link>
      </Container>
    </Box>
  )
}
