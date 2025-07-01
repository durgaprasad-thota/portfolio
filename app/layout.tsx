import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Durga Prasad Thota - Software Engineer',
  description: 'Software Engineer specializing in Test Automation, AI Integration, and Quality Assurance. Building scalable automation frameworks and AI-powered testing solutions.',
  keywords: 'Software Engineer, Test Automation, AI, Quality Assurance, Selenium, Java, CI/CD',
  authors: [{ name: 'Durga Prasad Thota' }],
  openGraph: {
    title: 'Durga Prasad Thota - Software Engineer',
    description: 'Software Engineer specializing in Test Automation, AI Integration, and Quality Assurance.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 