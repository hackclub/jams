import { Box, Text, Card, Badge, Image } from 'theme-ui'
import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const ReactFreezeframe = dynamic(() => import('react-freezeframe'), {
  ssr: false
})
export default function PreviewCard({
  title,
  thumbnail,
  slug,
  keywords,
  difficulty,
  timeEstimate,
  part = 0,
  light = true,
  sticker,
  presentation = '',
  video = '',
  totalParts = null,
  parts = null,
  redirect = '/',
  isSortable,
  currentDifficulty,
  currentTime,
  currentCategories,
  modifyDifficulty,
  modifyTime,
  modifyCategories,
  ...props
}) {
  const freezeFrame = useRef()
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <>
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'pointer' }}
        {...props}>
        <Box sx={{ borderRadius: '16px' }}>
          <Box
            sx={{
              zIndex: 1,
              marginLeft: '8px',
              maxWidth: '420px',
              marginTop: '8px',
              display: 'flex',
              flexWrap: 'wrap'
            }}>
            {isHovered && (
              <Box
                style={{
                  marginBottom: isHovered || parts?.length ? '-48px' : '0px',
                  paddingTop: '8px',
                  zIndex: 2
                }}>
                {parts?.length && (
                  <Badge
                    key="partFeature"
                    mr={2}
                    sx={{
                      cursor: 'pointer',
                      backgroundColor: '#993CCF',
                      fontSize: ['14px', 'auto']
                    }}
                    variant="outline"
                    color="#fff">
                    {parts.length} Parts
                  </Badge>
                )}
                {part != '0' && (
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
                    Part {part.split('-')[1]}
                  </Badge>
                )}
                <Badge
                  key="keywordFeature"
                  mr={2}
                  sx={{
                    cursor: 'pointer',
                    backgroundColor: currentCategories.includes(
                      keywords.split(', ')[0]
                    )
                      ? '#993CCF'
                      : '#fff', // indicates BG color
                    marginBottom: '8px',
                    fontSize: ['14px', 'auto']
                  }}
                  variant="outline"
                  onClick={() => {
                    if (isSortable) {
                      if (currentCategories.includes(keywords.split(', ')[0])) {
                        console.log(
                          'Removing ' + keywords.split(', ')[0] + ' from Sort'
                        )
                        modifyCategories(
                          currentCategories.filter(
                            current => current !== keywords.split(', ')[0]
                          )
                        )
                      } else {
                        console.log('Adding ' + keywords.split(', ')[0])
                        const updatedCategories = [
                          ...currentCategories,
                          keywords.split(', ')[0]
                        ]
                        console.log(updatedCategories)
                        modifyCategories(updatedCategories)
                      }
                    }
                  }}
                  color={
                    currentCategories.includes(keywords.split(', ')[0])
                      ? '#FFFFFF'
                      : '#993CCF'
                  } //indicates text color
                >
                  {keywords.split(', ')[0]}
                </Badge>
                {part === 0 && (
                  <Badge
                    key="difficultyFeature"
                    mr={2}
                    sx={{
                      cursor: 'pointer',
                      backgroundColor:
                        currentDifficulty == difficulty.toLowerCase()
                          ? '#993CCF'
                          : '#fff', // indicates BG color
                      marginBottom: '8px',
                      fontSize: ['14px', 'auto']
                    }} // Adjust '4px' as needed
                    variant="outline"
                    color={
                      currentDifficulty == difficulty.toLowerCase()
                        ? '#FFFFFF'
                        : '#993CCF'
                    } //indicates text color
                    onClick={() => {
                      if (isSortable) {
                        if (currentDifficulty == difficulty.toLowerCase()) {
                          console.log('Removing Difficulty Sort')
                          modifyDifficulty('')
                        } else {
                          console.log('Changing to ' + difficulty.toLowerCase())
                          modifyDifficulty(difficulty.toLowerCase())
                        }
                      }
                    }}>
                    {difficulty}
                  </Badge>
                )}
                {!parts && (
                  <Badge
                    key="timeFeature"
                    mr={2}
                    sx={{
                      cursor: 'pointer',
                      backgroundColor:
                        currentTime == timeEstimate ? '#993CCF' : '#fff', // indicates BG color
                      marginBottom: '8px',
                      fontSize: ['14px', 'auto']
                    }} // Adjust '4px' as needed
                    variant="outline"
                    color={currentTime == timeEstimate ? '#FFFFFF' : '#993CCF'} //indicates text color
                    onClick={() => {
                      if (isSortable) {
                        if (currentTime == timeEstimate) {
                          console.log('Removing Time Sort')
                          modifyTime('')
                        } else {
                          console.log('Changing to ' + timeEstimate)
                          modifyTime(timeEstimate)
                        }
                      }
                    }}>
                    {timeEstimate}
                  </Badge>
                )}
              </Box>
            )}
          </Box>

          <a style={{ color: '#000', textDecoration: 'none' }} href={redirect}>
            <Box
              sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'cover'
              }}>
              {thumbnail?.includes('.gif') && part == '0' ? (
                <ReactFreezeframe
                  src={thumbnail}
                  options={{
                    overlay: false, // Optional: Show overlay play icon
                    trigger: 'hover' // Use 'hover' to trigger animation on hover
                  }}
                  sx={{
                    width: '100%',
                    aspectRatio: '16/9',
                    zIndex: 0,
                    objectFit: 'cover',
                    background:
                      'linear-gradient(180deg, rgba(70, 10, 105, 0.40) 0%, rgba(70, 10, 105, 0.17) 24.48%, rgba(70, 10, 105, 0.00) 71.88%, rgba(70, 10, 105, 0.08) 100%), lightgray -99.453px -68.488px / 151.798% 131.707% no-repeat'
                  }}
                />
              ) : (
                <Image
                  src={thumbnail}
                  sx={{
                    width: '100%',
                    objectFit: 'cover',
                    background:
                      'linear-gradient(180deg, rgba(70, 10, 105, 0.40) 0%, rgba(70, 10, 105, 0.17) 24.48%, rgba(70, 10, 105, 0.00) 71.88%, rgba(70, 10, 105, 0.08) 100%), lightgray -99.453px -68.488px / 151.798% 131.707% no-repeat'
                  }}
                />
              )}
            </Box>
          </a>
        </Box>
        <a style={{ color: '#000', textDecoration: 'none' }} href={redirect}>
          <Text
            as="h2"
            sx={{
              fontSize: 28,
              lineHeight: 1.2,
              fontWeight: '600',
              mt: '0.75rem'
            }}>
            {title}
          </Text>
        </a>
      </Box>
    </>
  )
}
