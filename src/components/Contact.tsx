import React from 'react';
import { ArrowRight } from './Icons';
import useScrollAnimation from './useScrollAnimation';
import StackedSection from './StackedSection';

export default function Contact() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <StackedSection id="contact" zIndex={5} bg="bg">
      <div
        ref={ref}
        className="container spawn-element"
        style={{ textAlign: 'center', maxWidth: '680px' }}
      >
        <span className="section-label">Get in Touch</span>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '1.25rem', marginTop: '0.5rem' }}>
          Ready to collaborate?
        </h2>
        <p
          style={{
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
            fontSize: '1.2rem',
            lineHeight: '1.6',
          }}
        >
          I am currently open for research collaborations, internships, and full-stack software roles. If you have a project in mind or just want to chat about AI, LLM reasoning, or data architectures, feel free to reach out.
        </p>

        <a
          href="mailto:kshav005@gmail.com"
          className="btn btn-primary"
          style={{ padding: '0.85rem 2.5rem', fontSize: '1.3rem' }}
        >
          Say Hello <ArrowRight />
        </a>
      </div>
    </StackedSection>
  );
}
