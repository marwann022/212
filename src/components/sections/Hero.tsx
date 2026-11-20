"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        timeline
          .from(".hero-kicker > *", { yPercent: 110, duration: 0.75, stagger: 0.08 })
          .from(".hero-title .line > span", { yPercent: 115, duration: 0.95, stagger: 0.1 }, "-=0.45")
          .from(".hero-copy, .hero-actions", { y: 24, opacity: 0, duration: 0.8, stagger: 0.12 }, "-=0.55")
          .from(".portrait-shell", { clipPath: "inset(0 0 100% 0)", duration: 1.25 }, "-=1.05")
          .from(".portrait-shell img", { scale: 1.12, duration: 1.5 }, "<")
          .from(".temperature-rail > *", { opacity: 0, x: 18, duration: 0.55, stagger: 0.08 }, "-=0.75");

      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-kicker" aria-label="The extra degree">
          <span>THE</span><span>EXTRA</span><span>DEGREE</span>
        </div>

        <h1 id="hero-title" className="hero-title">
          <span className="line"><span>We build</span></span>
          <span className="line"><span>markets.</span></span>
          <span className="line hero-title-accent"><span>Not products.</span></span>
        </h1>

        <p className="hero-copy">
          From ideas to markets. From products to brands. We connect international manufacturers and innovators with opportunities across the Gulf and North Africa.
        </p>

        <div className="hero-actions">
          <a className="primary-action" href="#opportunities">
            Explore opportunities <ArrowUpRight size={18} />
          </a>
          <a className="text-action" href="#story">Discover our story</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-shell">
          <Image
            src="/images/hero/founder-daughter.png"
            alt="212°F leadership reviewing a project together"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            className="portrait-image"
          />
          <div className="portrait-caption"><span>CAIRO</span><span>EGYPT</span></div>
        </div>

        <div className="temperature-rail" aria-label="The transformation from 211 to 212 degrees Fahrenheit">
          <span>211°</span>
          <i aria-hidden="true"><b /></i>
          <strong>212°F</strong>
        </div>
      </div>

      <a href="#story" className="scroll-cue">
        <ArrowDown size={16} /> <span>Scroll to the extra degree</span>
      </a>
    </section>
  );
}
