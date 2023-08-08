import { Box, Text, Link, Paragraph, Image } from 'theme-ui';
import Icon from '@hackclub/icons'

export default function Comment({ githubUser, children }) {
  // make request to https://api.github.com/users/${githubUser}

  return <>
    <Box sx={{ width: "100%", position: "relative" }}>
      <Box sx={{
        position: ["static", "absolute"],
        top: 0,
        left: "calc(100%)",
        width: ["100%", "13rem"],
        px: "12px",
        pt: "12px",
        // bg: "rgba(0,0,0,0.1)",
        border: "2px solid rgba(0,0,0,0.1)",
        borderRadius: "8px",
        backdropFilter: "blur(16px)",
        bg:"rgb(255,255,255,0.50)",
        zIndex: 4,
      }}>
        <Link href={`https://github.com/${githubUser}`} sx={{ display: "flex", textDecoration: "none", color: "#000", alignItems: "center", gap: "0.5rem" }}>
          <Image
            src={`https://github.com/${githubUser}.png`}
            sx={{
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "50%",
              bg: "rgba(0,0,0,0.1)",
            }}
          />
          <Text sx={{ fontWeight: "bold", fontSize: 1, lineHeight: 1 }}>
            {githubUser}
          </Text>
        </Link>

        <Box sx={{
          lineHeight: "1.25rem",
          fontSize: 1,
          mt: "-0.5rem",
        }}>
          {children}
        </Box>
      </Box>
    </Box>
  </>
}
