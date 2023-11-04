import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '../utils/providers'
const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
