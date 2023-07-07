import { Box, Text, Card, Image } from 'theme-ui'

export default function PreviewCard({
  title,
  image,
  slug,
  light = true,
  ...props
}) {
  return (
    <>
      <Box {...props}>
        <Box sx={{ borderRadius: '16px' }}>
          <Image
            src={image}
            sx={{
              width: '100%',
              borderRadius: '16px',
              background:
                'linear-gradient(180deg, rgba(70, 10, 105, 0.40) 0%, rgba(70, 10, 105, 0.17) 24.48%, rgba(70, 10, 105, 0.00) 71.88%, rgba(70, 10, 105, 0.08) 100%), lightgray -99.453px -68.488px / 151.798% 131.707% no-repeat'
            }}
          />
        </Box>
        <Text as="h2" sx={{ fontSize: 28, lineHeight: 1.2, fontWeight: '600' }}>
          {title}
        </Text>
      </Box>
    </>
  )
}
