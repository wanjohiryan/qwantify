import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arc3dia | For developers',
  description: 'Play with friends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preload"
          href="/fonts/SF-Pro-Bold.otf"
          as="font"
          crossOrigin=""
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
