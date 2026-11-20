import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="story" className="story-band" aria-labelledby="story-title">
        <p>THE TRANSFORMATION</p>
        <div>
          <span className="story-number">211°</span>
          <span className="story-line" aria-hidden="true" />
          <h2 id="story-title">One extra degree turns potential into momentum.</h2>
          <span className="story-number story-number--hot">212°F</span>
        </div>
      </section>
      <section id="opportunities" className="coming-next">
        <p>WHAT COMES NEXT</p>
        <h2>Markets. Brands. Ideas made real.</h2>
      </section>
      <section id="contact" className="sr-only" aria-label="Contact" />
    </main>
  );
}
