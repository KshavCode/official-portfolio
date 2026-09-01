import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from './Icons';
import useScrollAnimation from './useScrollAnimation';
import ImageFallback from './ImageFallback';
import StackedSection from './StackedSection';

export default function Hero() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <StackedSection id="hero" zIndex={1} bg="bg">
      <div ref={ref} className="container hero-grid spawn-element">
        {/* Left: Text Content */}
        <div className="hero-content">
          <span className="section-label">
            Full-Stack Developer & Python Engineer
          </span>

          <h1 className="display-text">
            Building production-ready web APIs <br />
            & Scalable <br />
            <span className="highlight">full-stack apps.</span>
          </h1>

          <p className="hero-desc" style={{ marginBottom: '2.25rem', fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            I build secure backend services with Python (FastAPI/Flask) and cross-platform mobile experiences with React Native. Focused on clean system design, offline-first reliability, and seamless API integration.
          </p>

          <div
            className="hero-actions"
            style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}
          >
            <Link to="/projects" className="btn btn-primary">
              View Projects <ArrowRight />
            </Link>
            <a
              href="/resume.pdf"
              download="KeshavPal_resume.pdf"
              className="btn btn-outline"
            >
              Resume <Download />
            </a>
          </div>
        </div>

        {/* Right: Hand-drawn Image Layout */}
        <div className="hero-image-wrapper">
          <div className="hero-img-card">
            <ImageFallback
              src="/hero-img.png"
              alt="Keshav Pal"
              className="hero-img"
              fallbackType="hero"
            />
            <div className="hero-caption">
              Keshav Pal • Researcher & Developer
            </div>
          </div>
        </div>
      </div>
    </StackedSection>
  );
}
