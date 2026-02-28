import { Metadata } from "next";
import Home from "@/components/Home";
import About from "@/components/About";
import ShowCase from "@/components/ShowCase";
import Blog from "@/components/Blog";
import TechStack from "@/components/TechStack";
import RecentWork from "@/components/RecentWork";
import { SectionCursor } from "@/components/SectionCursor";

export const metadata: Metadata = {
  title: "Portfolio | Home",
  description: "Welcome to my portfolio website",
};

export default function HomePage() {
  return (
    <main>
      <SectionCursor sectionName="Welcome">
        <Home backgroundImage="/kyphan.jpg" />
      </SectionCursor>
      <SectionCursor sectionName="About Me">
        <About aboutImage="/avt.png" />
      </SectionCursor>
      <SectionCursor sectionName="My Tech Stack">
        <TechStack />
      </SectionCursor>
      <SectionCursor sectionName="My Experience">
        <RecentWork />
      </SectionCursor>
      <SectionCursor sectionName="My Projects">
        <ShowCase />
      </SectionCursor>
      <SectionCursor sectionName="My Articles">
        <Blog />
      </SectionCursor>
    </main>
  );
}
