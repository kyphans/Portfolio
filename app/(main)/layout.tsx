import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pb-24 pt-16">{children}</main>
      <Footer />
    </>
  )
}
