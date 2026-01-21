import { GithubIcon, LinkedinIcon, ArrowRight } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to collaborate?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
          I am currently open for internships and entry-level roles. If you have a project in mind or just want to chat about data, feel free to reach out.
        </p>
        
        <a href="mailto:kshav005@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
          Say Hello <span style={{ marginLeft: '10px' }}><ArrowRight /></span>
        </a>
      </div>
    </section>
  );
}