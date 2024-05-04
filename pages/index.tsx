import Head from 'next/head'
import { Home } from '@/components/home/Home'

export default function home() {
  return (
    <>
      <Head>
        <title>OneSie | OneSie</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="OneSie | OneSie"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="OneSie | OneSie"
        />
        <meta
          name="description"
          content="OneSie | OneSie"
        />

        <meta
          property="og:title"
          content="OneSie | OneSie"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://timelightcurve.com/" />
        <meta property="og:image" content="../public/screenshot.png" />
        <meta
          property="og:description"
          content="Onesie | Onesie"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jc_devz" />
        <meta
          name="twitter:title"
          content="OneSie | OneSie"
        />
        <meta
          name="twitter:description"
          content="OneSie | OneSie"
        />
        <meta name="twitter:creator" content="@jc_devz" />
        <meta name="twitter:image" content="../public/screenshot.png" />
      </Head>
      <Home />
    </>
  )
}
