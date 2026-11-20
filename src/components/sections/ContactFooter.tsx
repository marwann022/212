import { ArrowUpRight } from "lucide-react";

export function ContactFooter() {
  return (
    <>
      <section id="contact" className="contact-cta" aria-labelledby="contact-title">
        <p className="section-index"><span>06</span> START A CONVERSATION</p>
        <h2 id="contact-title">Where do you<br />want to grow<br /><em>next?</em></h2>
        <a href="mailto:info@212franchise.com">
          <span>Tell us about the opportunity</span><ArrowUpRight size={34} strokeWidth={1.3} />
        </a>
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
