import { Instrument_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import LoadingBar from '@/components/LoadingBar'

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

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
      <body className={instrumentSans.className}>
        <ThemeProvider themes={["pink", "green"]} defaultTheme="pink">
          <LoadingBar />
          {children}
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}
      </body>
    </html>
  );
} 