import { Box } from 'theme-ui'

export default function Blockquote({ children }) {
  return (
    <Box
      sx={{
        borderLeft: '4px solid #ddd',
        pl: 3
      }}>
      {children}
    </Box>
  )
}
