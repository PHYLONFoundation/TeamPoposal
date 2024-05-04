import Head from 'next/head'
import { Home } from '@/components/home/Home'

export default function home() {
  return (
    <>
      <Head>
        <title>Amir Shayan Shayeganfar | Frontend Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="Amir Shayan Shayeganfar| Frontend Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Amir Shayan Shayeganfar | Frontend Developer"
        />
        <meta
          name="description"
          content="Hey! I'm Amir Shayan Shayeganfar, and I'm a Bachelor of Science in Information Technology graduate."
        />

        <meta
          property="og:title"
          content="Amir Shayan Shayeganfar | Frontend Developer"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://timelightcurve.com/" />
        <meta property="og:image" content="../public/screenshot.png" />
        <meta
          property="og:description"
          content="Hey! I'm Amir Shayan Shayeganfar, and I'm a Bachelor of Science in Information Technology graduate."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jc_devz" />
        <meta
          name="twitter:title"
          content="Amir Shayan Shayeganfar | Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Hey! I'm Amir Shayan Shayeganfar, and I'm a Bachelor of Science in Information Technology graduate."
        />
        <meta name="twitter:creator" content="@jc_devz" />
        <meta name="twitter:image" content="../public/screenshot.png" />
      </Head>
      <Home />
    </>
  )
}
