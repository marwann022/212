"use client";

import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#story", label: "Our story" },
  { href: "#opportunities", label: "Opportunities" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <a href="#top" className="brand-mark" aria-label="212°F Franchise Egypt home">
        <Image src="/images/brand/212-logo.png" alt="212°F Franchise Egypt" width={2048} height={1443} priority />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">
        Start a conversation <ArrowUpRight size={16} strokeWidth={1.8} />
      </a>

      <button
        className={`menu-trigger ${open ? "is-open" : ""}`}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <div className={`mobile-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <p>FRANCHISE EGYPT</p>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
