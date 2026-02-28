import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionCursor } from "@/components/SectionCursor";
import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SectionCursor sectionName="Navigate" variant="inverted">
        <Navbar />
      </SectionCursor>
      <main className="pb-24 pt-16">{children}</main>
      <SectionCursor sectionName="Touch Me" variant="inverted">
        <Footer />
      </SectionCursor>
    </>
  );
}
