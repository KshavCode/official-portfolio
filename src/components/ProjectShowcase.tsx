import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from './Icons';
import useScrollAnimation from './useScrollAnimation';
import StackedSection from './StackedSection';

interface Project {
  title: string;
  desc: string;
  tech: string;
  link: string;
}

interface ProjectCardProps {
  key?: string | number;
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useScrollAnimation<HTMLAnchorElement>();

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      className="project-item spawn-element"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="icon-fade">
          <ExternalLink />
        </span>
      </div>
      <p className="project-desc">{project.desc}</p>
      <div>
        <span className="project-tech">{project.tech}</span>
      </div>
    </a>
  );
};

export default function ProjectShowcase() {
  const projects: Project[] = [
    {
      title: "ArsdSaathi",
      desc: "Built the official ARSD DU student app, an offline-firstutility mobile application serving 2,000+ active student users.",
      tech: "React Native · JavaScript",
      link: "https://github.com/KshavCode/arsd-saathi-app",
    },
    {
      title: "TherapEase",
      desc: "An open-source movement analysis application that tracks posture and form for guided physiotherapy routines in real-time.",
      tech: "React Native · OpenCV · Python",
      link: "https://github.com/KshavCode/therapease-app",
    },
    {
      title: "DevRace",
      desc: "A gamified developer quiz platform designed to test coding knowledge across various tech stacks while allowing users to climb competitive ranks from Novice to Legend.",
      tech: "Python · SQLite · Tkinter",
      link: "https://github.com/KshavCode/devrace",
    },
  ];

  return (
    <StackedSection id="work" zIndex={3} bg="bg">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <span className="section-label">Pinned Projects</span>
            <h2 className="display-text" style={{ fontSize: '2.8rem', margin: 0 }}>
              Featured Work
            </h2>
          </div>
          <Link to="/projects" className="btn btn-outline" style={{ fontSize: '1.15rem', padding: '0.5rem 1.4rem' }}>
            View All Archive ({21}) <ArrowRight />
          </Link>
        </div>

        <div className="projects-list-container">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </StackedSection>
  );
}
