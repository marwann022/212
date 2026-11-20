import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { Transformation } from "@/components/sections/Transformation";
import { Pillars } from "@/components/sections/Pillars";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Transformation />
      <Pillars />
      <section id="contact" className="sr-only" aria-label="Contact" />
    </main>
  );
}
