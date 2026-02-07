import { ArrowRight, Download } from './Icons';
import useScrollAnimation from './useScrollAnimation';
import hero_img from '/hero-img.png'

export default function Hero() {
  const ref = useScrollAnimation();

  return (
    <section className="section" style={{ 
      minHeight: '85vh', 
      display: 'flex', 
      alignItems: 'flex-end', /* Pushes content to bottom */
      paddingBottom: 0, /* Removes gap so image touches border */
      overflow: 'hidden' /* Prevents scrollbars if image scales up */
    }}>
      <div ref={ref} className="container hero-grid spawn-element" style={{ alignItems: 'flex-end', height: '100%' }}>
        
        {/* Left: Content (Vertically centered in its own space) */}
        <div className="hero-content" style={{ paddingBottom: '6rem', alignSelf: 'center' }}>
          <span className="section-label animate-fade-up">Software Developer (with a focus on Data & Automation)</span>
          
          <h1 className="display-text animate-fade-up delay-100">
            Turning raw data <br />
            into <span style={{ color: 'var(--text-accent)' }}>clear impact.</span>
          </h1>
          
          <p className="hero-desc animate-fade-up delay-200" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            I build Python-based tools and data analyses, and develop React Native applications to turn raw data and ideas into clear, usable experiences.
          </p>
          
          <div className="hero-actions animate-fade-up delay-300" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="/projects" className="btn btn-primary">
              View Projects <span style={{ marginLeft: '8px' }}><ArrowRight /></span>
            </a>
            <a href="/resume.pdf" download="KeshavPal_resume.pdf" className="btn btn-outline">
              Resume <span style={{ marginLeft: '8px' }}><Download /></span>
            </a>
          </div>
        </div>

        {/* Right: Image (Anchored Bottom) */}
        <div className="hero-image-wrapper animate-fade-up delay-300">
          <img 
            src={hero_img} 
            alt="Profile" 
            className="hero-img"
          />
        </div>

      </div>
    </section>
  );
}