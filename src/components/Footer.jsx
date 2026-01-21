import { useState } from "react";
import { GithubIcon, LinkedinIcon, ArrowRight, Check } from "./Icons"; // Make sure you have a Check icon or use text

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const email = "kshav005@gmail.com";
  const portfolioLinks = [
    { name: "V1", url: "https://kshavcode.github.io/Portfolio/V1/" },
    { name: "V2", url: "https://kshavcode.github.io/Portfolio/V2/" },
    { name: "V3", url: "https://kshavcode.github.io/Portfolio/V3/" },
    { name: "V4", url: "https://kshavcode.github.io/Portfolio/V4/" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Reset back to arrow after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* Top Section: The Call to Action */}
        <div className="footer-cta animate-fade-up">
          <h2 className="footer-title">
            Have an idea?
            <br />
            {/* Replaced <a> with a button interaction */}
            <button
              onClick={handleCopy}
              className={`email-link-btn ${copied ? "copied" : ""}`}
              aria-label="Copy email address"
            >
              {copied ? "Email Copied!" : "Let's build it"}
              <span className="icon-wrapper">
                {copied ? <Check /> : <ArrowRight />}
              </span>
            </button>
          </h2>
        </div>

        {/* Bottom Section: Info & Links */}
        <div className="footer-bottom">
          {/* Column 1: Brand */}
          <div className="footer-brand-col">
            <a href="#" className="brand">
              Made By Keshav
            </a>
            <p className="copyright">© {currentYear} • Crafted with Vite & React</p>
          </div>

          {/* Column 2: Portfolio Links (New Center Section) */}
          <div
            className="footer-nav-links"
            style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
          >
            {portfolioLinks.map((link) => (
              <a
                key={link.name}
                href={link.url} // <--- Uses the specific URL here
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--text-muted)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
                onMouseOver={(e) =>
                  (e.target.style.color = "var(--text-accent)")
                }
                onMouseOut={(e) => (e.target.style.color = "var(--text-muted)")}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Column 3: Social Icons */}
          <div className="footer-socials">
            <a
              href="https://github.com/KshavCode"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/kshavcodes/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
