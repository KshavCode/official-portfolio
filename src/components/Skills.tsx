import React from 'react';
import { CodeIcon, DatabaseIcon, TerminalIcon } from './Icons';
import useScrollAnimation from './useScrollAnimation';
import StackedSection from './StackedSection';

interface AnimatedCardProps {
  children: React.ReactNode;
  delayClass: string;
}

const AnimatedCard = ({ children, delayClass }: AnimatedCardProps) => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className={`skill-card spawn-element ${delayClass}`}>
      {children}
    </div>
  );
};

const HeaderAnimation = () => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className="skills-header spawn-element">
      <span className="section-label">Capabilities</span>
      <h2 className="display-text" style={{ fontSize: '2.8rem', marginBottom: '0.75rem' }}>
        Technical Expertise
      </h2>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '650px', lineHeight: '1.6' }}>
        My toolbelt is built for bridging the gap between raw data analysis, machine learning research, and interactive modern web & mobile applications.
      </p>
    </div>
  );
};

export default function Skills() {
  return (
    <StackedSection id="skills" zIndex={2} bg="bg-subtle">
      <div className="container">
        <HeaderAnimation />

        <div className="skills-grid">
          {/* Card 1 */}
          <AnimatedCard delayClass="">
            <div className="skill-icon-wrapper">
              <DatabaseIcon />
            </div>
            <div className="skill-content">
              <h3 className="skill-title">Backend & Systems</h3>
              <p className="skill-desc">High-performance modules and frameworks for AI & data systems.</p>
              <div className="skill-tags">
                {[
                  'Python',
                  'FastAPI / Flask',
                  'OpenCV',
                  'PostgreSQL',
                  'Selenium',
                  'SQLite',
                  'Streamlit',
                ].map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Card 2 */}
          <AnimatedCard delayClass="delay-100">
            <div className="skill-icon-wrapper">
              <CodeIcon />
            </div>
            <div className="skill-content">
              <h3 className="skill-title">Frontend & Mobile</h3>
              <p className="skill-desc">Building resilient scripts and responsive UIs.</p>
              <div className="skill-tags">
                {[
                  'React Native', 'Kivy',
                  'React', 'HTML5 / CSS3'
                ].map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Card 3 */}
          <AnimatedCard delayClass="delay-200">
            <div className="skill-icon-wrapper">
              <TerminalIcon />
            </div>
            <div className="skill-content">
              <h3 className="skill-title">Tools & Platforms</h3>
              <p className="skill-desc">The essential software, cloud, and analytical toolsets.</p>
              <div className="skill-tags">
                {[
                  'Git',
                  'GitHub',
                  'Jupyter Notebook',
                  'PowerBI',
                  'Tkinter',
                  'Linux / Bash Scripting',
                ].map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </StackedSection>
  );
}
