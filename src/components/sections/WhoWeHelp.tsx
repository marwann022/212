"use client";

import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const partners = [
  {
    number: "01",
    title: "Manufacturers",
    detail: "Enter or expand across Gulf and North African markets with a structured commercial platform.",
  },
  {
    number: "02",
    title: "Investors & Distributors",
    detail: "Access premium international products and qualified, protected franchise opportunities.",
  },
  {
    number: "03",
    title: "Developers & Contractors",
    detail: "Source innovative construction, energy, automation, and infrastructure solutions.",
  },
];

export function WhoWeHelp() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".partner-row", {
        xPercent: -7,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 65%" },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="who-we-help" aria-labelledby="partners-title">
      <header>
        <p className="section-index"><span>03</span> WHO WE HELP</p>
        <h2 id="partners-title">Built for people<br />ready to move.</h2>
      </header>

      <div className="partner-list">
        {partners.map((partner) => (
          <article className="partner-row" key={partner.number}>
            <span>{partner.number}</span>
            <h3>{partner.title}</h3>
            <p>{partner.detail}</p>
            <ArrowUpRight aria-hidden="true" size={25} strokeWidth={1.4} />
          </article>
        ))}
      </div>
    </section>
  );
}
