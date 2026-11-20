"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const sectors = [
  {
    name: "Automation & Robotics",
    tag: "ENGINEERING TO ORDER",
    detail: "Custom production-line automation, warehouse robotics, and construction delivery systems with project-based authorization and technical support.",
    image: "/images/sectors/automation-robotics.jpg",
  },
  {
    name: "Solar Energy & Smart Grid",
    tag: "ENERGY INFRASTRUCTURE",
    detail: "Solar trackers, BIPV, power-generating glass, off-grid systems, MV/LV equipment, solar trees, and EV charging solutions.",
    image: "/images/sectors/solar-smart-grid.jpg",
  },
  {
    name: "Prefabricated Steel Units",
    tag: "RAPID CONSTRUCTION",
    detail: "Modular housing, worker camps, site offices, and industrial facilities for major projects across KSA, UAE, and Egypt.",
    image: "/images/sectors/prefabricated-steel.jpg",
  },
  {
    name: "Smart Home Devices",
    tag: "CONNECTED LIVING",
    detail: "Advanced smart-home and building-automation systems designed around energy management, security, and seamless integration.",
    image: "/images/sectors/smart-home.jpg",
  },
  {
    name: "Floating Houses & Marine Architecture",
    tag: "WATERFRONT HOSPITALITY",
    detail: "Floating villas, autonomous eco-lodges, houseboats, and marine hospitality structures for the region’s emerging waterfront destinations.",
    image: "/images/sectors/floating-houses.jpg",
  },
];

export function Sectors() {
  const [active, setActive] = useState(0);

  return (
    <section id="sectors" className="sectors" aria-labelledby="sectors-title">
      <div className="sectors-heading editorial-intro" data-section="04">
        <p className="section-index"><span>04</span> FRANCHISE OPPORTUNITIES</p>
        <h2 id="sectors-title">Five sectors.<br /><em>One platform.</em></h2>
      </div>

      <div className="sector-film" aria-label="Five franchise sectors">
        {sectors.map((sector, index) => (
          <article
            className={`sector-panel${active === index ? " is-active" : ""}`}
            key={sector.name}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse" && window.matchMedia("(width > 800px) and (hover: hover)").matches) {
                setActive(index);
              }
            }}
          >
            <Image
              src={sector.image}
              alt={`${sector.name} opportunity sector`}
              fill
              sizes="(max-width: 800px) 100vw, (max-width: 1700px) 46vw, 780px"
              className="sector-panel-image"
            />
            <div className="sector-panel-shade" aria-hidden="true" />
            <button
              type="button"
              className="sector-panel-toggle"
              aria-label={sector.name}
              aria-expanded={active === index}
              aria-controls={`sector-detail-${index}`}
              onClick={() => setActive(index)}
            >
              <span className="sector-panel-top"><span>0{index + 1}</span><i /><span>05</span></span>
              <span className="sector-panel-collapsed-title">{sector.name}</span>
              <span className="sector-panel-plus" aria-hidden="true">{active === index ? "−" : "+"}</span>
            </button>
            <div className="sector-panel-copy" id={`sector-detail-${index}`} inert={active !== index}>
              <p>{sector.tag}</p>
              <h3>{sector.name}</h3>
              <div className="sector-panel-detail">
                <p>{sector.detail}</p>
                <a href="#contact" aria-label={`Discuss ${sector.name}`}><ArrowUpRight size={24} /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
