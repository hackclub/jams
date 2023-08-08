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
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
        <script defer data-domain="jams.hackclub.com" src="https://plausible.io/js/script.js"></script>
      </Head>
      <Meta
        as={Head}
        name="Hack Club"
        title="Jams"
        description="Collaborative coding workshops for clubs where sparks ignite,
        fears dissolve, and inventions come to life."
        image="https://cloud-kmjdr71cm-hack-club-bot.vercel.app/0hack_club_assemble_ltnj_00622.jpg"
        color="#ec3750"
      />
      <Component {...pageProps} />
    </ThemeUIProvider>
  )
}
