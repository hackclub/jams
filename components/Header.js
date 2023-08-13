import { Container, Box, Grid, Input, Image, Link } from 'theme-ui'
import Icon from '@hackclub/icons'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { number } from 'prop-types'

export default function Header({
  isHomePage = false,
  back,
  query,
  setQuery,
  jams = []
}) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [searching, setSearching] = useState(false)
  const [numberAvailable, setNumberAvailable] = useState(5)
  const [showMoreVisible, setShowMoreVisible] = useState(false)

  const fruits = ['raspberry', 'blueberry']
  const placeholderText = fruits[Math.floor(Math.random() * fruits.length)]

  const router = useRouter()

  const handleMouseDown = event => {
    event.preventDefault()
  }

  const handleShowMoreClick = () => {
    setNumberAvailable(prevNumber => prevNumber + 5)
  }

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleDocumentMouseDown = event => {
      const showMoreElement = document.getElementById('show-more')
      if (showMoreElement && !showMoreElement.contains(event.target)) {
        setShowMoreVisible(false)
      }
    }

    document.addEventListener('mousedown', handleDocumentMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleDocumentMouseDown)
    }
  }, [])

  const easterEgg = event => {
    // If enter key and input value is preset jam
    if (
      event.target.value.toLowerCase().split(' ')[0] != '' &&
      event.target.value.toLowerCase().split(' ')[1] == 'jam' &&
      fruits.includes(event.target.value.toLowerCase().split(' ')[0])
    ) {
      setTimeout(_ => {
        var typedtext = event.target.value.toLowerCase().split(' ')[0]
        console.log(typedtext)
        // Need to set query to nothing so the jam images load and can be turned into jam
        setQuery('')
        // For now it just opens the gist in a new tab, in the future it would be cool to have like a modal pop up or something
        window.open('/txtfile/' + typedtext.toLowerCase() + '/jam.txt', 'blank')

        alert('[===' + typedtext.toUpperCase() + '=JAM=MODE=ACTIVATED===]')

        setInterval(_ => {
          document.querySelectorAll('img').forEach(img => {
            // hack club banner thing at top breaks it so dont change that image
            if (img.parentElement.href != 'https://hackclub.com/') {
              img.src = '/txtfile/' + typedtext.toLowerCase() + '/jam.jpeg'
            }
          })

          document.querySelectorAll('canvas').forEach(canvas => {
            // fill canvas with jam image(for the thumbnails that have gifs)
            const ctx = canvas.getContext('2d')
            ctx.drawImage(
              document.querySelector('img'),
              0,
              0,
              canvas.width,
              canvas.height
            )
          })
        }, 500)

        // document.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6").forEach((el) => {
        //   el.innerText = "I love JAM";
        //   setTimeout(_ => {

        //     el.animate(
        //       [
        //         // keyframes
        //         { transform: "rotate(1deg)" },
        //         {
        //           transform: "rotate(-1deg)" ,
        //           color: "tomato"
        //         },
        //         { transform: "rotate(1deg)" },
        //       ],
        //       {
        //         // timing options
        //         duration: 1000,
        //         iterations: Infinity,
        //         easing: "ease-in-out"
        //       }
        //     );
        //   }, Math.random * 1000)
        // });
      }, 200)
    }
  }

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
        backgroundColor: `rgba(240, 240, 240, ${Math.min(
          scrollPosition / 75,
          0.75
        )})`,
        width: '100vw'
      }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        {isHomePage ? (
          <Link style={{ height: '80px' }} href="https://hackclub.com/">
            <Image src="/assets/flag.svg" />
          </Link>
        ) : (
          <a
            style={{
              color: '#000',
              textDecoration: 'none',
              margin: '0px',
              padding: '0px'
            }}
            href={back}>
            <Box
              sx={{
                height: '84px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex'
              }}>
              <div
                style={{
                  display: 'flex',
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderRadius: '32px',
                  border: '1px solid #8492a6',
                  cursor: 'pointer'
                }}>
                <Icon
                  glyph="view-back"
                  style={{ height: '24px', padding: '0px' }}
                />
                <span>Back</span>
              </div>
            </Box>
          </a>
        )}
        <Box
          sx={{
            px: 16,
            width: '256px',
            display: ['none', 'flex'],
            border: isHomePage ? '1px solid #993CCF' : '1px solid #8492a6',
            borderRadius: '32px',
            backgroundColor: '#fff',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'relative'
          }}>
          <Icon glyph="search" color={isHomePage ? '#993CCF' : '#3c4858'} />
          <Input
            onFocus={() => setSearching(true)}
            onBlur={() => setTimeout(() => setSearching(false), 250)}
            sx={{
              'border': 'none',
              '&:focus': {
                outline: 'none',
                boxShadow: 'none'
              }
            }}
            value={query}
            onChange={event => {
              setQuery(event.target.value)
              easterEgg(event)
            }}
            onKeyDown={easterEgg}
            placeholder={'Search for ' + placeholderText.charAt(0).toUpperCase() + placeholderText.substring(1) + ' Jam'}
          />

          {searching && jams.length !== 0 && query !== '' && (
            <div id="show-more">
              <svg
                style={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '-12px', // Adjust this value as needed to control the vertical position
                  transform: 'translate(-50%, 100%)'
                }}
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.021 5.02513C12.4361 2.72254 15.7826 2.72255 17.1977 5.02514L24.0822 16.2269C25.5666 18.6422 23.8288 21.75 20.9938 21.75H7.22493C4.38997 21.75 2.65217 18.6422 4.13657 16.2269L11.021 5.02513Z"
                  fill="white"
                />
                <g clip-path="url(#clip0_277_117)">
                  <path
                    d="M14.1094 0L27.4766 21.75H0.742188L14.1094 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_277_117">
                    <rect
                      width="27"
                      height="12"
                      fill="white"
                      transform="translate(0.742188 9.75)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '-32px',
                  transform: 'translate(-50%, 100%)',
                  color: '#000',
                  width: '360px',
                  borderRadius: '16px',
                  maxHeight: '248px',
                  backgroundColor: '#fff',
                  padding: '16px',
                  overflowY: 'scroll',
                  border: '2px solid #e0e6ed'
                }}>
                {jams?.slice(0, numberAvailable)?.map(jam => (
                  <Grid
                    onClick={() => router.push(`/jam/${jam.slug}`)}
                    columns={[null, '1fr 2fr']}
                    style={{
                      alignItems: 'start',
                      cursor: 'pointer',
                      borderBottom: '1px solid #e0e6ed',
                      paddingBottom: '8px',
                      paddingTop: '8px'
                    }}>
                    <img
                      style={{
                        maxWidth: '100%',
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        borderRadius: '8px'
                      }}
                      src={jam.thumbnail}
                    />
                    <p style={{ margin: 0, fontSize: '16px' }}>{jam.title}</p>
                  </Grid>
                ))}
                {jams.length > numberAvailable ? (
                  <p
                    onMouseDown={handleMouseDown}
                    onClick={handleShowMoreClick}
                    style={{
                      alignItems: 'center',
                      width: '100%',
                      textAlign: 'center',
                      color: '#8F44C6',
                      cursor: 'pointer'
                    }}>
                    Show More
                  </p>
                ) : (
                  <p></p>
                )}
              </Box>
            </div>
          )}
        </Box>

        <Link
          href="https://github.com/hackclub/jams"
          target="_blank"
          style={{ marginLeft: '110px' }}
          sx={{
            'color': isHomePage
              ? `rgba(calc(255 - ${scrollPosition}), calc(255 - ${scrollPosition}), calc(255 - ${scrollPosition}), 1)`
              : '#000',
            '&:hover': {
              color: scrollPosition != 0 ? '#993CCF' : '#fff' // Set text color to purple on hover
            }
          }}>
          <Icon glyph="github" />
        </Link>
      </Container>
    </Box>
  )
}
