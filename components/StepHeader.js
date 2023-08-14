import { Heading } from 'theme-ui'

export default function StepHeader({ children }) {
  return (
    <Heading key={children} id={children} sx={{ mt: -100, pt: 100 }}>
      {children}
    </Heading>
  )
}
