"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Transformation() {
  const root = useRef<HTMLElement>(null);
  const degree = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
        const state = { value: 211 };
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 0.7,
          },
        });

        timeline
          .to(".temperature-progress", { scaleY: 1, ease: "none" }, 0)
          .to(state, {
            value: 212,
            ease: "none",
            onUpdate: () => {
              if (degree.current) degree.current.textContent = state.value.toFixed(1);
            },
          }, 0)
          .to(".transformation-before", { opacity: 0.18, xPercent: -7, ease: "power2.inOut" }, 0.18)
          .fromTo(
            ".transformation-after",
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", ease: "power2.inOut" },
            0.25,
          )
          .from(".market-route", { strokeDashoffset: 620, ease: "none" }, 0.3)
          .from(".market-node", { scale: 0, transformOrigin: "center", stagger: 0.08, ease: "back.out(2)" }, 0.45);
      });

      media.add("(max-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".transformation-after, .transformation-copy", {
          opacity: 0,
          y: 42,
          duration: 0.85,
          stagger: 0.12,
          scrollTrigger: { trigger: root.current, start: "top 72%" },
        });
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="story" className="transformation" aria-labelledby="transformation-title">
      <div className="transformation-grid" aria-hidden="true" />

      <div className="temperature-meter" aria-label="Temperature rising from 211 to 212 degrees Fahrenheit">
        <span className="temperature-label">TEMPERATURE</span>
        <div className="temperature-track"><i className="temperature-progress" /></div>
        <span className="temperature-readout"><b ref={degree}>211.0</b>°F</span>
      </div>

      <div className="transformation-stage">
        <p className="section-index"><span>01</span> THE EXTRA DEGREE</p>

        <div className="transformation-before" aria-hidden="true">
          <span>211°</span>
          <p>Hot enough to wait.</p>
        </div>

        <div className="transformation-after">
          <div className="transformation-copy">
            <h2 id="transformation-title">One degree.<br />A world of<br /><em>difference.</em></h2>
            <p>
              At 211°F, water is hot. At 212°F, it moves the world. We bring that extra degree of strategy, access, and execution to every market we enter.
            </p>
          </div>

          <div className="market-visual" aria-hidden="true">
            <svg viewBox="0 0 560 430" role="presentation">
              <path className="market-route" d="M25 347 C121 327 120 198 224 212 C324 226 313 77 430 97 C489 107 498 52 540 27" />
              <circle className="market-node" cx="25" cy="347" r="8" />
              <circle className="market-node" cx="224" cy="212" r="8" />
              <circle className="market-node" cx="430" cy="97" r="8" />
              <circle className="market-node market-node--hot" cx="540" cy="27" r="13" />
            </svg>
            <span className="market-label market-label--egypt">EGYPT</span>
            <span className="market-label market-label--gulf">GULF</span>
            <span className="market-label market-label--world">BEYOND</span>
          </div>
        </div>
      </div>
    </section>
  );
}
