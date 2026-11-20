import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function ContactFooter() {
  return (
    <>
      <section id="contact" className="contact-cta" aria-labelledby="contact-title">
        <Image
          src="/images/contact/market-expansion.png"
          alt="Aerial view connecting Egypt with Gulf and North African markets"
          fill
          sizes="100vw"
          className="contact-map"
        />
        <div className="contact-overlay" aria-hidden="true" />
        <div className="contact-content">
          <p className="section-index"><span>06</span> START A CONVERSATION</p>
          <h2 id="contact-title">Your next market<br />starts with one<br /><em>conversation.</em></h2>
          <p>Tell us what you are building, where you want to go, and what stands between the two.</p>
          <a href="mailto:info@212franchise.com">
            <span>Tell us about the opportunity</span><ArrowUpRight size={27} strokeWidth={1.3} />
          </a>
        </div>
        <div className="contact-coordinates" aria-hidden="true">
          <span>CAIRO · 30.0444° N</span><i /><span>GULF · NORTH AFRICA</span>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <p>212°F FRANCHISE EGYPT LLC</p>
          <span>THE EXTRA DEGREE</span>
        </div>
        <address>
          24 Al Shaheed Mustafa Riyad St.<br />Nasr City, Cairo, Egypt
        </address>
        <div className="footer-contact">
          <a href="mailto:info@212franchise.com">info@212franchise.com</a>
          <a href="tel:+20222611018">+20 2 2261 1018</a>
          <a href="tel:+201200925552">+20 120 092 5552</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} 212°F Franchise Egypt</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
