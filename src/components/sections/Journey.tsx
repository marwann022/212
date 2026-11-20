"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const phases = [
  ["01", "Discover", "Understand the ambition, product, and regional opportunity."],
  ["02", "Evaluate", "Test market fit, commercial viability, and the route forward."],
  ["03", "Position", "Shape the proposition, pricing, and story for the right audience."],
  ["04", "Connect", "Build the qualified distributor, developer, and partner network."],
  ["05", "Launch", "Turn the plan into active market entry and a real project pipeline."],
  ["06", "Grow", "Measure performance, strengthen the network, and expand with intent."],
];

export function Journey() {
  const root = useRef<HTMLElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(min-width: 1001px) and (prefers-reduced-motion: no-preference)", () => {
        const steps = gsap.utils.toArray<HTMLElement>(".journey-step");
        gsap.set(steps, {
          autoAlpha: (index: number) => index === 0 ? 1 : 0,
          y: (index: number) => index === 0 ? 0 : 48,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top 84px",
            end: "+=360%",
            pin: true,
            scrub: 0.65,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline.to(".journey-progress", { scaleX: 1, ease: "none", duration: 6 }, 0);
        steps.slice(1).forEach((step, index) => {
          const previous = steps[index];
          const at = index + 0.72;
          timeline
            .to(previous, { autoAlpha: 0, y: -46, duration: 0.28 }, at)
            .to(step, { autoAlpha: 1, y: 0, duration: 0.38 }, at + 0.12);
        });
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="process" className="journey" aria-labelledby="journey-title">
      <aside className="journey-intro" data-section="05">
        <p className="section-index"><span>05</span> OUR METHODOLOGY</p>
        <h2 id="journey-title">A clear route<br />from interest<br />to <em>impact.</em></h2>
        <p>Six phases. Defined deliverables. No vague promises.</p>
      </aside>

      <div className="journey-stage">
        <div className="journey-mobile-nav" aria-label="Methodology phases">
          {phases.map(([number, title], index) => (
            <button
              type="button"
              key={number}
              className={activePhase === index ? "is-active" : ""}
              aria-pressed={activePhase === index}
              onClick={() => setActivePhase(index)}
            >
              <span>{number}</span>{title}
            </button>
          ))}
        </div>
        <div className="journey-steps">
          {phases.map(([number, title, description], index) => (
            <article className={`journey-step${activePhase === index ? " is-mobile-active" : ""}`} key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>

        <div className="journey-rail" aria-hidden="true">
          <i className="journey-progress" />
          {phases.map(([number, title]) => (
            <span key={number}><b>{number}</b>{title}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
