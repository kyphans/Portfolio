import { Metadata } from 'next'
import Home from '@/components/Home'
import About from '@/components/About'
import ShowCase from '@/components/ShowCase'
import Blog from '@/components/Blog'
import TechStack from "@/components/TechStack";
import RecentWork from '@/components/RecentWork'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Portfolio | Home',
  description: 'Welcome to my portfolio website',
}

export default function HomePage() {
  return (
    <main>
      <Home backgroundImage="/kyphan.jpg" />
      <About aboutImage="/avt.png" />
      <TechStack />
      <RecentWork />
      <ShowCase />
      <Blog />
      <Footer />
    </main>
  );
}