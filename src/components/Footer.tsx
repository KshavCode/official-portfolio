import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, ArrowRight, Check, Download } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const email = 'kshav005@gmail.com';
  const portfolioLinks = [
    { name: 'V1', url: 'https://kshavcode.github.io/Portfolio/V1/' },
    { name: 'V2', url: 'https://kshavcode.github.io/Portfolio/V2/' },
    { name: 'V3', url: 'https://kshavcode.github.io/Portfolio/V3/' },
    { name: 'V4', url: 'https://kshavcode.github.io/Portfolio/V4/' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* Top Section: CTA */}
        <div className="footer-cta">
          <h2 className="footer-title">
            Let's build something impactful together.
            <br />
            <button
              onClick={handleCopy}
              className={`email-link-btn ${copied ? 'copied' : ''}`}
              aria-label="Copy email address"
            >
              {copied ? 'Email Copied!' : "Contact Me"}
              <span className="icon-wrapper">
                {copied ? <Check /> : <ArrowRight />}
              </span>
            </button>
            <a
              href="/resume.pdf"
              download="KeshavPal_resume.pdf"
              className="email-link-btn"
              style={{marginLeft: 50}}
              >
                Download Resume <Download />
            </a>
          </h2>
        </div>

        {/* Bottom Section: Info & Links */}
        <div className="footer-bottom">
          {/* Column 1: Brand */}
          <div className="footer-brand-col">
            <a href="/" className="brand" style={{ fontSize: '1.8rem' }}>
              Made By Keshav
            </a>
            <p className="copyright">© {currentYear} • Crafted with Vite, React & Doodles</p>
          </div>


          {/* Column 2: Social Icons */}
          <div className="footer-socials">
            <a
              href="https://github.com/KshavCode"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/kshavcodes/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
