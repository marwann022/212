"use client";

import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const pillars = [
  {
    number: "01",
    title: "Build Markets",
    eyebrow: "REGIONAL EXPANSION",
    description: "We read the market, find the opening, and build the commercial path from first entry to lasting regional presence.",
    accent: "red",
  },
  {
    number: "02",
    title: "Build Brands",
    eyebrow: "POSITIONING & GROWTH",
    description: "We turn strong products into brands people understand, trust, and choose across distinct cultures and categories.",
    accent: "navy",
  },
  {
    number: "03",
    title: "Make Ideas Real",
    eyebrow: "FROM CONCEPT TO MARKET",
    description: "We connect innovation with the partners, decisions, and execution needed to move from possibility to commercial reality.",
    accent: "paper",
  },
];

export function Pillars() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.utils.toArray<HTMLElement>(".pillar-panel").forEach((panel) => {
        gsap.from(panel.querySelectorAll(".pillar-reveal"), {
          y: 44,
          opacity: 0,
          duration: 0.9,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: panel, start: "top 72%" },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="opportunities" className="pillars" aria-labelledby="pillars-title">
      <header className="pillars-intro">
        <p className="section-index"><span>02</span> WHAT WE BUILD</p>
        <h2 id="pillars-title">Three disciplines.<br />One direction:<br /><em>forward.</em></h2>
        <p>We do not hand over recommendations. We stay close enough to the work to help create the outcome.</p>
      </header>

      <div className="pillar-stack">
        {pillars.map((pillar) => (
          <article key={pillar.number} className={`pillar-panel pillar-panel--${pillar.accent}`}>
            <div className="pillar-number pillar-reveal">{pillar.number}</div>
            <div className={`pillar-art pillar-art--${pillar.number}`} aria-hidden="true">
              <i /><i /><i /><b />
            </div>
            <div className="pillar-main">
              <p className="pillar-eyebrow pillar-reveal">{pillar.eyebrow}</p>
              <h3 className="pillar-reveal">{pillar.title}</h3>
            </div>
            <p className="pillar-description pillar-reveal">{pillar.description}</p>
            <a className="pillar-link pillar-reveal" href="#contact" aria-label={`Discuss ${pillar.title}`}>
              <ArrowUpRight size={24} strokeWidth={1.5} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
