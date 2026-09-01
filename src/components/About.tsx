import React from 'react';
import useScrollAnimation from './useScrollAnimation';
import StackedSection from './StackedSection';

export default function About() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <StackedSection id="about" zIndex={4} bg="bg-subtle">
      <div className="container">
        {/* Hand-drawn tape label */}
        <span className="section-label">About Me</span>

        {/* Animated Wrapper */}
        <div
          ref={ref}
          className="grid-2 spawn-element"
          style={{ marginTop: '1.5rem', alignItems: 'center' }}
        >
          <h2 style={{ fontSize: '2.8rem', lineHeight: '1.25' }}>
            Bridging the gap between <br />
            <span className="highlight">theoretical computer science</span>{' '}
            <br />
            and practical engineering.
          </h2>

          <div style={{ fontSize: '1.2rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              My experience ranges from developing offline-first applications serving 2,000+ active users to collaborating with fellow developers on open-source tools and exploring machine learning frameworks.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              I am actively looking for software engineering internships and junior developer roles where I can contribute to production-grade APIs, mobile applications, and high-impact systems.
            </p>
            <p style={{ marginBottom: '3rem' }}>
              Whether I'm collaborating with my college computer science group,
              or building a project, my goal is always to write clean,
              modular, and impactful code.
            </p>
          </div>
        </div>
      </div>
    </StackedSection>
  );
}
