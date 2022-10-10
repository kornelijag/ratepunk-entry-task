import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Noto+Sans:wght@400;700&display=swap" 
        rel="stylesheet"></link>
        <link href="https://www.dafontfree.net/embed/Z2FkdWdpLWJvbGQmZGF0YS80Ni9nLzYzNzMwL2dhZHVnaWIudHRm" 
        rel="stylesheet" type="text/css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}