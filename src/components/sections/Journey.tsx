"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

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

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const steps = gsap.utils.toArray<HTMLElement>(".journey-step");
      gsap.fromTo(
        ".journey-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: ".journey-steps", start: "top 60%", end: "bottom 60%", scrub: true },
        },
      );

      steps.forEach((step) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 60%",
          end: "bottom 42%",
          toggleClass: { targets: step, className: "is-active" },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="process" className="journey" aria-labelledby="journey-title">
      <aside className="journey-intro">
        <p className="section-index"><span>05</span> OUR METHODOLOGY</p>
        <h2 id="journey-title">A clear route<br />from interest<br />to impact.</h2>
        <p>Six phases. Defined deliverables. No vague promises.</p>
      </aside>

      <div className="journey-steps">
        <div className="journey-line" aria-hidden="true"><i className="journey-progress" /></div>
        {phases.map(([number, title, description]) => (
          <article className="journey-step" key={number}>
            <span>{number}</span>
            <div><h3>{title}</h3><p>{description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
