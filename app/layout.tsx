import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Footer from '@/components/Footer'
import { Head } from 'next/document'

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
      <Head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MS773M93KF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MS773M93KF');
            `,
          }}
        />
      </Head>
      <body className={inter.className}>
        <ThemeProvider themes={["pink", "green"]} defaultTheme="pink">
          <Navbar />
          <main className="pb-24 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
} 