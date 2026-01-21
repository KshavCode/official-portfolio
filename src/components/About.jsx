import useScrollAnimation from './useScrollAnimation';

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section-label">About Me</span>
        
        {/* Animated Wrapper */}
        <div ref={ref} className="grid-2 spawn-element" style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '2rem', lineHeight: '1.3' }}>
            I am a Computer Science student with a passion for logic and clarity.
          </h2>
          <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              My journey started with a curiosity about how data shapes the world. Now, I use Python to analyze data, automate workflows, and build practical tools that turn raw datasets into clear insights.
            </p>
            <p>
              I’m currently seeking internship opportunities where I can apply data analysis and backend development skills to real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}