import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Provider from '../utils/providers'
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKS Challenge',
  description: 'Application for MKS Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
