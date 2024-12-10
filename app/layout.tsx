import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'KP Portfolio Website',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider themes={['pink', 'green']} defaultTheme="pink">
          <Navbar />
          <main className="pt-16 pb-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
} 