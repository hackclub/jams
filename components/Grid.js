import { Grid as ThemeGrid } from 'theme-ui'

export default function Grid({ cols, children }) {
  return (
    <ThemeGrid gap={[0, null, 4]} columns={[1, null, cols]}>
      {children}
    </ThemeGrid>
  )
}
