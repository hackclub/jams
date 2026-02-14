import { Container, Box, Grid, Input, Image, Link } from 'theme-ui'
import Icon from '@hackclub/icons'
import { FiGithub, FiArrowLeft } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { number } from 'prop-types'

/** @jsxImportSource theme-ui */

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
  const [placeholderText, setPlaceholderText] = useState('')
  const [didEasterEgg, setDidEasterEgg] = useState(false)

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

  // make the placeholder text a random fruit using useEffect. This ensures that the UI updates as well
  useEffect(() => {
    setPlaceholderText(fruits[Math.floor(Math.random() * fruits.length)])
  }, [])

  const easterEgg = event => {
    // If input value is preset jam
    if (
      event.target.value.toLowerCase() === placeholderText + ' jam' &&
      !didEasterEgg
    ) {
      setDidEasterEgg(true)
      setTimeout(_ => {
        // Need to set query to nothing so the jam images load and can be turned into jam
        setQuery('')
        // For now it just opens the gist in a new tab, in the future it would be cool to have like a modal pop up or something
        window.open(
          '/txtfile/' + placeholderText.toLowerCase() + '/jam.txt',
          'blank'
        )

        alert(
          '[===' + placeholderText.toUpperCase() + '=JAM=MODE=ACTIVATED===]'
        )

        setInterval(_ => {
          document.querySelectorAll('img').forEach(img => {
            // hack club banner thing at top breaks it so dont change that image
            if (img.parentElement.href != 'https://hackclub.com/') {
              img.src =
                '/txtfile/' + placeholderText.toLowerCase() + '/jam.jpeg'
              img.classList.add('xmd539850a193e8d4bba9857a3c05add295f')
            }
          })

          document.querySelectorAll('canvas').forEach(canvas => {
            // fill canvas with jam image(for the thumbnails that have gifs)
            const ctx = canvas.getContext('2d')
            const jamImage = document.querySelector(
              '.xmd539850a193e8d4bba9857a3c05add295f'
            )
            if (
              !(jamImage instanceof HTMLImageElement) ||
              !jamImage.complete ||
              jamImage.naturalWidth === 0 ||
              jamImage.naturalHeight === 0
            ) {
              return
            }
            try {
              ctx.drawImage(jamImage, 0, 0, canvas.width, canvas.height)
            } catch (error) {
              return
            }
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
        width: '100vw'
      }}
      style={{
        backgroundColor:
          scrollPosition < 50 ? 'transparent' : 'rgba(240,240,240,0.75)',
        transitionProperty: 'background-color',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '500ms'
      }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        {isHomePage ? (
          <Link style={{ height: '4rem' }} href="https://hackclub.com/">
            <Image src="/assets/flag.svg" sx={{ height: '100%' }} />
          </Link>
        ) : (
          <a
            sx={{
              'my': '16px',
              'pl': '6px',
              'pr': '10px',
              'py': '4px',
              'display': 'flex',
              'alignItems': 'center',
              'gap': '4px',
              'textDecoration': 'none',
              '&:hover': {
                borderRadius: '9999px',
                outlineStyle: 'solid',
                outlineWidth: '2px'
              }
            }}
            style={{
              color: '#993CCF',
              outlineColor: '#993CCF',
              transitionProperty: 'color, outline-color',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDuration: '500ms'
            }}
            href={back}>
            <FiArrowLeft style={{ fontSize: '1.4rem' }} />
            <span>Back</span>
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
            placeholder={
              'Search for ' +
              placeholderText.charAt(0).toUpperCase() +
              placeholderText.substring(1) +
              ' Jam'
            }
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
                    onClick={() => {
                      if (jam.isBatch) {
                        router.push(`/batch/${jam.slug}`)
                      } else {
                        router.push(`/jam/${jam.slug}`)
                      }
                    }}
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
          rel="noopener noreferrer"
          sx={{
            'ml': '84px',
            'px': '4px',
            'pt': '5px',
            '&:hover': {
              borderRadius: '9999px',
              outlineStyle: 'solid',
              outlineWidth: '2px'
            }
          }}
          style={{
            color: isHomePage && scrollPosition < 50 ? '#fff' : '#993CCF',
            outlineColor:
              isHomePage && scrollPosition < 50 ? '#fff' : '#993CCF',
            transitionProperty: 'color, outline-color',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '500ms'
          }}>
          <FiGithub sx={{ fontSize: 3, mb: '-5px' }} />
        </Link>
      </Container>
    </Box>
  )
}
