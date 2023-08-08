import theme from '@hackclub/theme'
import Meta from '@hackclub/meta'
import { ThemeUIProvider } from 'theme-ui'
import Head from 'next/head'
import '@hackclub/icons'
import '@hackclub/theme/fonts/reg.css'
import '@hackclub/theme/fonts/reg-bold.css'
import '@/styles/globals.scss'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <ThemeUIProvider
      theme={{
        ...theme,
        colors: { ...theme.colors, modes: {} },
        styles: {
          ...theme.styles,
          code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
            color: 'black',
            bg: 'sunken',
            borderRadius: 'small',
            mx: 1,
            px: 1
          }
        }
      }}>

      <Meta
        as={Head}
        name="Hack Club"
        title="Jams"
        description="Learn how to build and ship with Jams!"
        image=""
        color="#ec3750"
      />
      <Component {...pageProps} />
    </ThemeUIProvider>
  )
}
