import { CodeIcon, DatabaseIcon, TerminalIcon } from './Icons';
import useScrollAnimation from './useScrollAnimation';

// Helper component for animated card
const AnimatedCard = ({ children, delayClass }) => {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`skill-card spawn-element ${delayClass}`}>
      {children}
    </div>
  );
};

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        
        {/* Header (Manual animation ref) */}
        <HeaderAnimation />

        <div className="skills-grid">
          
          {/* Card 1 */}
          <AnimatedCard delayClass="">
            <div className="skill-icon-wrapper"><DatabaseIcon /></div>
            <div className="skill-content">
              <h3 className="skill-title">Libraries & Modules</h3>
              <p className="skill-desc">Efficient modules to work with, to create projects.</p>
              <div className="skill-tags">
                {['Pandas', 'Seaborn', 'Matplotlib', 'Streamlit', 'Tkinter', 'Mediapipe', 'OpenCV', 'React Native', 'React', 'PostgreSQL', 'SQLite', 'Selenium'].map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          </AnimatedCard>

          {/* Card 2 */}
          <AnimatedCard delayClass="delay-100">
            <div className="skill-icon-wrapper"><CodeIcon /></div>
            <div className="skill-content">
              <h3 className="skill-title">Development</h3>
              <p className="skill-desc">Building efficient scripts and responsive user interfaces.</p>
              <div className="skill-tags">
                {['Python', 'JavaScript', 'Bash Script', 'Git', 'HTML5', 'CSS3', 'SQL'].map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          </AnimatedCard>

          {/* Card 3 */}
          <AnimatedCard delayClass="delay-200">
            <div className="skill-icon-wrapper"><TerminalIcon /></div>
            <div className="skill-content">
              <h3 className="skill-title">Tools & Platforms</h3>
              <p className="skill-desc">The essential software and environments I use daily.</p>
              <div className="skill-tags">
                {['VS Code', 'GitHub', 'Jupyter Notebook', 'RStudio', 'MySQL Workbench', 'PowerBI', 'Excel', 'Powerpoint'].map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          </AnimatedCard>

        </div>
      </div>
    </section>
  );
}

// Separate component for Header to keep the main component clean
const HeaderAnimation = () => {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="skills-header spawn-element">
      <span className="section-label">Capabilities</span>
      <h2 className="display-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Technical Expertise
      </h2>
      <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
        My toolbelt is built for bridging the gap between raw data analysis and interactive modern web applications.
      </p>
    </div>
  );
};