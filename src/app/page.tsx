import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { Transformation } from "@/components/sections/Transformation";
import { Pillars } from "@/components/sections/Pillars";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { Sectors } from "@/components/sections/Sectors";
import { Journey } from "@/components/sections/Journey";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Transformation />
      <Pillars />
      <WhoWeHelp />
      <Sectors />
      <Journey />
      <ContactFooter />
      <ScrollToTop />
    </main>
  );
}
