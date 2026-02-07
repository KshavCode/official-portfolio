import { ExternalLink } from './Icons';
import useScrollAnimation from './useScrollAnimation';

// Helper Component for individual animation
const ProjectCard = ({ project, index }) => {
  const ref = useScrollAnimation();
  
  return (
    <a 
      href={project.link} 
      target='_blank'
      ref={ref} 
      className="project-item group spawn-element"
      style={{ transitionDelay: `${index * 100}ms` }} // Inline stagger
    >
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="icon-fade"><ExternalLink /></span>
      </div>
      <p className="project-desc">{project.desc}</p>
      <div style={{ marginTop: '1rem' }}>
        <span className="project-tech">{project.tech}</span>
      </div>
    </a>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Data Analysis Case Studies",
      desc: "A collection of comprehensive analysis of 2k+ rows on real-world datasets to create dashboards and gain impactful insights.",
      tech: "Python · Pandas · Matplotlib · Streamlit · PowerPoint",
      link: "https://github.com/KshavCode/data-analysis-case-studies/"
    },
    {
      title: "TherapEase",
      desc: "An intelligent physiotherapy platform designed to modernize exercise tracking. It uses real-time movement analysis, and automated progress reporting to make therapy accessible from anywhere.",
      tech: "React Native · OpenCV · Mediapipe · FastAPI · SQL · Python",
      link: "https://github.com/KshavCode/therapease-app"
    },
    {
      title: "ARSD Saathi",
      desc: "App designed as an automation utility that logs into the ARSD College student portal with methods to get attendance, faculty, basic and subject details.",
      tech: "React Native · FastAPI · CLI · Python · Selenium",
      link: "https://github.com/KshavCode/arsd-saathi"
    }
  ];

  return (
    <section id="work" className="section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container">
        <span className="section-label">Pinned Projects</span>
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}