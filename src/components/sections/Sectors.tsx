"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";

const sectors = [
  {
    name: "Automation & Robotics",
    tag: "ENGINEERING TO ORDER",
    detail: "Custom production-line automation, warehouse robotics, and construction delivery systems with project-based authorization and technical support.",
  },
  {
    name: "Solar Energy & Smart Grid",
    tag: "ENERGY INFRASTRUCTURE",
    detail: "Solar trackers, BIPV, power-generating glass, off-grid systems, MV/LV equipment, solar trees, and EV charging solutions.",
  },
  {
    name: "Prefabricated Steel Units",
    tag: "RAPID CONSTRUCTION",
    detail: "Modular housing, worker camps, site offices, and industrial facilities for major projects across KSA, UAE, and Egypt.",
  },
  {
    name: "Smart Home Devices",
    tag: "CONNECTED LIVING",
    detail: "Advanced smart-home and building-automation systems designed around energy management, security, and seamless integration.",
  },
  {
    name: "Floating Houses & Marine Architecture",
    tag: "WATERFRONT HOSPITALITY",
    detail: "Floating villas, autonomous eco-lodges, houseboats, and marine hospitality structures for the region’s emerging waterfront destinations.",
  },
];

export function Sectors() {
  const [active, setActive] = useState(0);
  const sector = sectors[active];

  return (
    <section id="sectors" className="sectors" aria-labelledby="sectors-title">
      <div className="sectors-heading">
        <p className="section-index"><span>04</span> FRANCHISE OPPORTUNITIES</p>
        <h2 id="sectors-title">Five sectors.<br /><em>One platform.</em></h2>
      </div>

      <div className="sector-explorer">
        <article
          id="sector-detail"
          className="sector-visual"
          role="tabpanel"
          key={sector.name}
          style={{ "--sector-index": active } as CSSProperties}
        >
          <Image
            src="/images/sectors/sector-panorama.png"
            alt="A visual panorama of the five 212°F opportunity sectors"
            fill
            sizes="(max-width: 900px) 100vw, 70vw"
            className="sector-panorama"
          />
          <div className="sector-visual-shade" aria-hidden="true" />
          <div className="sector-counter" aria-hidden="true">
            <span>0{active + 1}</span><i /><span>05</span>
          </div>
          <div className="sector-copy">
            <p>{sector.tag}</p>
            <h3>{sector.name}</h3>
            <div>
              <p>{sector.detail}</p>
              <a href="#contact" aria-label={`Discuss ${sector.name}`}><ArrowUpRight size={25} /></a>
            </div>
          </div>
        </article>

        <div className="sector-tabs" role="tablist" aria-label="Franchise sectors">
          {sectors.map((item, index) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="sector-detail"
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
            >
              <span>0{index + 1}</span><strong>{item.name}</strong><i aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
