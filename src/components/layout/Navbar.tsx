"use client";

import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#story", label: "Story" },
  { href: "#opportunities", label: "What we build" },
  { href: "#sectors", label: "Sectors" },
  { href: "#process", label: "How we work" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 32);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!open) return;
    const desktop = window.matchMedia("(min-width: 1001px)");
    const overflow = document.body.style.overflow;
    const closeOnResize = () => {
      if (desktop.matches) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };

    document.body.style.overflow = "hidden";
    desktop.addEventListener("change", closeOnResize);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = overflow;
      desktop.removeEventListener("change", closeOnResize);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="brand-mark" aria-label="212°F Franchise Egypt home" onClick={() => setOpen(false)}>
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
        ref={toggle}
        className={`menu-trigger ${open ? "is-open" : ""}`}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <div id="mobile-menu" className={`mobile-panel ${open ? "is-open" : ""}`} inert={!open}>
        <p>FRANCHISE EGYPT</p>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}><span aria-hidden="true">↗</span>Start a conversation</a>
        </nav>
      </div>
    </header>
  );
}
