"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Transformation() {
  const root = useRef<HTMLElement>(null);
  const degree = useRef<HTMLSpanElement>(null);
  const [boiling, setBoiling] = useState(false);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(min-width: 1001px) and (prefers-reduced-motion: no-preference)", () => {
        const state = { value: 211 };
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top 84px",
            end: "+=120%",
            pin: true,
            scrub: 0.7,
            anticipatePin: 1,
          },
        });

        timeline
          .to(".threshold-meter-fill", { scaleX: 1, ease: "none" }, 0)
          .to(state, {
            value: 212,
            ease: "none",
            onUpdate: () => {
              if (degree.current) degree.current.textContent = state.value > 211.96 ? "212" : state.value.toFixed(1);
            },
          }, 0)
          .to(".threshold-before", { opacity: 0.22, xPercent: -8, ease: "power2.inOut" }, 0.12)
          .to(".threshold-after", { opacity: 1, xPercent: 0, ease: "power2.inOut" }, 0.18)
          .from(".threshold-outcome", { y: 28, opacity: 0, stagger: 0.08, ease: "power3.out" }, 0.42);
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="story" className={`transformation${boiling ? " is-boiling" : ""}`} aria-labelledby="transformation-title">
      <div className="threshold-grid" aria-hidden="true" />

      <div className="threshold-stage">
        <header className="threshold-header">
          <p className="section-index"><span>01</span> THE EXTRA DEGREE</p>
          <p>Potential is common. The point of transformation is not.</p>
        </header>

        <div className="threshold-board" aria-label="The change from 211 to 212 degrees Fahrenheit">
          <div className="threshold-side threshold-before">
            <span>211°F</span>
            <small>HEAT · POTENTIAL</small>
          </div>

          <div className="threshold-core">
            <p>BOILING POINT</p>
            <div className="threshold-readout"><span ref={degree}>{boiling ? "212" : "211.0"}</span><sup>°F</sup></div>
            <div className="threshold-meter" aria-hidden="true"><i className="threshold-meter-fill" /><b /></div>
            <button type="button" aria-pressed={boiling} onClick={() => setBoiling((value) => !value)}>
              <span>{boiling ? "Reset the temperature" : "Press to add the extra degree"}</span><b>{boiling ? "212°" : "+1°"}</b>
            </button>
          </div>

          <div className="threshold-side threshold-after">
            <span>212°F</span>
            <small>STEAM · MOVEMENT</small>
          </div>
        </div>

        <div className="threshold-footer">
          <h2 id="transformation-title">The extra degree<br />turns potential<br />into <em>momentum.</em></h2>
          <div className="threshold-outcomes">
            <div className="threshold-outcome"><span>01</span><strong>Strategy</strong><p>Find the exact opening worth pursuing.</p></div>
            <div className="threshold-outcome"><span>02</span><strong>Access</strong><p>Connect the right market and decision makers.</p></div>
            <div className="threshold-outcome"><span>03</span><strong>Execution</strong><p>Convert the opportunity into measurable movement.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
