"use client";

import Image from "next/image";
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
    image: "/images/contact/market-expansion.png",
  },
  {
    number: "02",
    title: "Build Brands",
    eyebrow: "POSITIONING & GROWTH",
    description: "We turn strong products into brands people understand, trust, and choose across distinct cultures and categories.",
    image: "/images/hero/brand-workshop.jpg",
  },
  {
    number: "03",
    title: "Make Ideas Real",
    eyebrow: "FROM CONCEPT TO MARKET",
    description: "We connect innovation with the partners, decisions, and execution needed to move from possibility to commercial reality.",
    image: "/images/sectors/prefabricated-steel.jpg",
  },
];

export function Pillars() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add({
        motion: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 801px)",
      }, ({ conditions }) => {
        if (!conditions?.motion) return;
        const desktop = conditions.desktop;

        gsap.utils.toArray<HTMLElement>(".build-chapter").forEach((chapter) => {
          const photo = chapter.querySelector(".build-photo img");
          const line = chapter.querySelector(".build-chapter-line");
          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: chapter,
              start: "top 95%",
              end: "center 42%",
              scrub: desktop ? 0.65 : 0.3,
            },
          });

          timeline
            .fromTo(photo, { scale: desktop ? 1.16 : 1.06 }, { scale: 1 }, 0)
            .fromTo(line, { scaleX: 0 }, { scaleX: 1 }, 0);
        });
      });
      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="opportunities" className="build-section" aria-labelledby="pillars-title">
      <header className="build-intro">
        <p className="section-index"><span>02</span> WHAT WE BUILD</p>
        <h2 id="pillars-title">Three disciplines.<br />One direction: <em>forward.</em></h2>
        <p>We do not hand over recommendations. We stay close enough to the work to help create the outcome.</p>
      </header>

      <div className="build-chapters">
        {pillars.map((pillar) => (
          <article key={pillar.number} className="build-chapter">
            <div className="build-copy">
              <p className="build-kicker"><span aria-hidden="true">{pillar.number}</span>{pillar.eyebrow}</p>
              <h3>{pillar.title}</h3>
              <p className="build-description">{pillar.description}</p>
            </div>
            <div className="build-photo">
              <Image
                src={pillar.image}
                alt=""
                fill
                sizes="(max-width: 800px) calc(100vw - 40px), (max-width: 1600px) 52vw, 830px"
              />
              <i className="build-chapter-line" aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
      <div className="build-next"><a href="#contact">Discuss your next opportunity</a></div>
    </section>
  );
}
