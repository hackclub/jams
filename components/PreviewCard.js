import { Box, Text, Card, Badge, Image } from 'theme-ui'
export default function PreviewCard({
  title,
  thumbnail,
  slug,
  keywords,
  difficulty,
  timeEstimate,
  part = 0,
  light = true,
  ...props
}) {
  return (
    <>
      <Box style={{cursor: "pointer"}} {...props}>
        <Box sx={{ borderRadius: '16px' }}>
        <Box sx={{position: "absolute", marginLeft: "8px", maxWidth: "420px", marginTop: "8px", display: 'flex', flexWrap: 'wrap'}}>
        {part != "0" ? (
        <Badge
        key="partFeature"
        mr={2}
        sx={{ cursor: 'pointer', backgroundColor: "#993CCF", marginBottom: "8px", fontSize: ["14px", "auto"] }} 
        variant="outline"
        color="#fff"
        >
                Part {part.split("-")[1]}

      </Badge>) : (<div></div>)}
            <Badge
        key="keywordFeature"
        mr={2}
        sx={{ cursor: 'pointer', backgroundColor: "#fff", marginBottom: "8px", fontSize: ["14px", "auto"] }} 
        variant="outline"
        color="#993CCF"
        >
          
                {keywords.split(", ")[0]}

      </Badge>
      <Badge
        key="difficultyFeature"
        mr={2}
        sx={{ cursor: 'pointer', backgroundColor: "#fff", marginBottom: "8px", fontSize: ["14px", "auto"]}} // Adjust '4px' as needed
        variant="outline"
        color="#993CCF"
        >
                {difficulty}

      </Badge>
      <Badge
        key="timeFeature"
        mr={2}
        sx={{ cursor: 'pointer', backgroundColor: "#fff", marginBottom: "8px", fontSize: ["14px", "auto"] }} // Adjust '4px' as needed
        variant="outline"
        color="#993CCF"
        >
        {timeEstimate}
      </Badge>
            </Box>
          <Image
            src={thumbnail}
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
