import { Box, Text, Card, Badge, Image } from 'theme-ui'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactFreezeframe = dynamic(() => import('react-freezeframe'), {
  ssr: false,
});
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
  const [isHovered, setIsHovered] = useState(false);



  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <Box onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{cursor: "pointer"}} {...props}>
        <Box sx={{ borderRadius: '16px' }}>
        {isHovered ? (
        <Box sx={{position: "absolute", zIndex: 1, marginLeft: "8px", maxWidth: "420px", marginTop: "8px", display: 'flex', flexWrap: 'wrap'}}>
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
            </Box>) : (<Box></Box>)}
            <Box sx={{borderRadius: "16px", overflow: 'hidden',             width: '100%',
            aspectRatio: '16/9',
            objectFit: 'cover',}}>
            {thumbnail.includes(".gif") && part == "0" ? (
        <ReactFreezeframe
          src={thumbnail}
          options={{
            overlay: false, // Optional: Show overlay play icon
            trigger: 'hover', // Use 'hover' to trigger animation on hover
          }}
          sx={{
            width: '100%',
            aspectRatio: '16/9',
            zIndex: 0,
            objectFit: 'cover',
            background:
              'linear-gradient(180deg, rgba(70, 10, 105, 0.40) 0%, rgba(70, 10, 105, 0.17) 24.48%, rgba(70, 10, 105, 0.00) 71.88%, rgba(70, 10, 105, 0.08) 100%), lightgray -99.453px -68.488px / 151.798% 131.707% no-repeat',
          }}
        />) : (        <Image
          src={thumbnail}

          sx={{
            width: '100%',
            aspectRatio: '16/9',
            objectFit: 'cover',
            background:
              'linear-gradient(180deg, rgba(70, 10, 105, 0.40) 0%, rgba(70, 10, 105, 0.17) 24.48%, rgba(70, 10, 105, 0.00) 71.88%, rgba(70, 10, 105, 0.08) 100%), lightgray -99.453px -68.488px / 151.798% 131.707% no-repeat',
          }}
        />)}
        </Box>
        </Box>
        <Text as="h2" sx={{ fontSize: 28, lineHeight: 1.2, fontWeight: '600' }}>
          {title}
        </Text>
      </Box>
    </>
  )
}

