import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parallels - All your timelines in one place',
  description: 'Explore alternate timelines where you made the lucky choices that led to wealth and success. Your fortunate universe awaits.',
  keywords: 'alternate timeline, success stories, wealth, fortune, lucky breaks, multiverse, parallels',
  authors: [{ name: 'Parallels' }],
  openGraph: {
    title: 'Parallels - Find Your Lucky Timeline',
    description: 'Every timeline where you got lucky exists. Find yours.',
    type: 'website',
    siteName: 'Parallels',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parallels - Find Your Lucky Timeline',
    description: 'Every timeline where you got lucky exists. Find yours.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
} 