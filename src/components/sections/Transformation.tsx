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
              if (degree.current) {
                degree.current.textContent = state.value > 211.96 ? "212" : state.value.toFixed(1);
              }
            },
          }, 0)
          .to(".degree-211", { opacity: 0.22, xPercent: -4, ease: "power2.inOut" }, 0.14)
          .fromTo(".degree-plus", { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, ease: "back.out(2)" }, 0.2)
          .fromTo(".degree-212", { opacity: 0.12, xPercent: 5 }, { opacity: 1, xPercent: 0, ease: "power2.inOut" }, 0.28)
          .from(".transformation-copy > *", { y: 35, opacity: 0, stagger: 0.1, ease: "power3.out" }, 0.34)
          .from(".market-route", { strokeDashoffset: 620, ease: "none" }, 0.38)
          .from(".market-node", { scale: 0, transformOrigin: "center", stagger: 0.08, ease: "back.out(2)" }, 0.5);
      });

      media.add("(max-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".degree-comparison, .transformation-copy, .market-visual", {
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

        <div className="transformation-layout">
          <div className="degree-comparison" aria-label="At 211 degrees water is hot. At 212 degrees it boils.">
            <div className="degree-state degree-211">
              <span>211</span><sup>°F</sup><small>HOT</small>
            </div>
            <div className="degree-plus" aria-hidden="true">+1°</div>
            <div className="degree-state degree-212">
              <span>212</span><sup>°F</sup><small>TRANSFORMATION</small>
            </div>
          </div>

          <div className="transformation-copy">
            <h2 id="transformation-title">One extra degree.<br /><em>Everything changes.</em></h2>
            <p>
              At 211°F, water is hot. At 212°F, it boils — creating steam, energy, and movement. That single degree is our standard: the extra strategy, access, and execution that turns potential into market momentum.
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
