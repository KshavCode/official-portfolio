import React from 'react';
import StackedSection from '../components/StackedSection';

type Track = 'project' | 'core' | 'cert';

interface GraphNodeData {
  id: string;
  year: string;
  month?: string;
  track: Track;
  title: string;
  desc?: string;
  issuer?: string;
  skills?: string[];
  img?: string;
}

export default function Roadmap() {
  const graphData: GraphNodeData[] = [
    { id: '1', year: '2023', month: 'Aug', track: 'core', title: 'Started CS Journey', desc: 'Embarked on Bachelor of Science in Computer Science with a focus on software engineering and AI at Delhi University.' },
    { id: '4', year: '2024', month: 'Apr', track: 'project', title: 'Applied Data Analysis', desc: 'Conducted exploratory data analyses and built dynamic charts using Plotly, Seaborn, and Pandas.' },
    { id: '3', year: '2024', month: 'Feb', track: 'core', title: 'Algorithm Optimization', desc: 'Deep-dived into data structures and algorithm optimization using C++ and Python via LeetCode.' },

    { id: '20', year: '2025', month: 'Dec', track: 'project', title: 'Learn React Native App', desc: 'Built a GUI and CLI based software with proper backend and database management.' },
    { id: '10', year: '2025', month: 'Oct', track: 'project', title: 'SIH Hackathon', desc: 'Collaborated in a high-intensity nationwide Smart India Hackathon developing civic and governance solutions.' },
    { id: '6', year: '2025', track: 'cert', title: "CS50's Python", issuer: 'Harvard', desc: 'Mastered Python fundamentals, unit testing, and memory management through Harvard\'s rigorous introductory course.', skills: ['Python', 'Problem-solving'], img: '/cs50p.jpg' },
    { id: '9', year: '2025', month: 'Oct', track: 'project', title: 'TherapEase Concept', desc: 'Started researching computer-vision posture calculation algorithms with MediaPipe pose landmarks for mobile physiotherapy.' },
    { id: '8', year: '2025', track: 'cert', title: 'Python: 10 Projects', issuer: 'Udemy', desc: 'Built 10 real-world applications focusing on Object-Oriented Programming and API integrations.', skills: ['Python', 'OOP'], img: '/udemy_python.jpg' },
    { id: '7', year: '2025', month: 'Sep', track: 'core', title: 'Enigma Escape', desc: 'Competed in Ram Lal Anand College programming contest, solving complex algorithmic puzzles under strict time limits.', skills: ['Problem-solving'], img: '/college_programming.jpg' },
    { id: '5', year: '2025', month: 'Aug', track: 'project', title: 'Tech-A-Thon Society', desc: 'Joined the college technical society and developed responsive web applications with modern frontend frameworks.' },

    { id: '11', year: '2026', month: 'June', track: 'core', title: 'Principal Internship', desc: 'Worked on deploying ArsdSaathi as an official college companion app.' },
    { id: '12', year: '2026', track: 'cert', title: 'B1 English For Devs', issuer: 'Udemy', desc: 'Enhanced professional writing and collaborative technical communication for cross-functional engineering teams.', skills: ['Professional Writing'], img: '/fcc_b1.jpg' },
    { id: '20', year: '2026', month: 'Mar', track: 'project', title: 'DevRace', desc: 'Built a GUI and CLI based software with proper backend and database management.' },
    { id: '13', year: '2026', track: 'cert', title: 'Excel Data Analysis', issuer: 'Udemy', desc: 'Advanced data manipulation using Pivot Tables, XLOOKUP, and complex macro scripting.', skills: ['Excel', 'Pivot Tables'], img: '/udemy_excel.jpg' },
    { id: '14', year: '2026', track: 'cert', title: 'A2 English For Devs', issuer: 'freeCodeCamp', desc: 'Focused on technical documentation reading comprehension and software requirement adaptation.', skills: ['Technical Communication'], img: '/fcc_a2.jpg' },
    { id: '15', year: '2026', track: 'cert', title: 'Prompt Engineering', issuer: 'Udemy', desc: 'Mastered Chain-of-Thought, Zero Shot, and Few Shot prompting techniques for Large Language Models.', skills: ['ChatGPT', 'Zero Shot'], img: '/udemy_prompt.jpg' },
    { id: '16', year: '2026', month: 'Jan', track: 'project', title: 'ARSD Saathi App', desc: 'Engineered headless session extraction and automated scraping workflows using Selenium & FastAPI to serve college data.' },
    { id: '17', year: '2026', track: 'cert', title: 'Python Data Analysis', issuer: 'freeCodeCamp', desc: 'Built predictive models and statistical charts processing thousands of rows of real-world datasets.', skills: ['Pandas', 'Matplotlib'], img: '/fcc_data.jpg' },
    { id: '18', year: '2026', month: 'Jan', track: 'project', title: 'UIDAI Hackathon', desc: 'Processed high-volume biometric validation datasets to retrieve key operational insights for systemic decision making.' },
    { id: '19', year: '2026', track: 'cert', title: 'Relational Database', issuer: 'freeCodeCamp', desc: 'Designed normalized schemas and complex table joins using raw SQL and terminal-based tools.', skills: ['PostgreSQL', 'Bash'], img: '/fcc_sql.jpg' },
  ];
  
  // Get unique years in descending order
  const years = Array.from(new Set(graphData.map((d) => d.year))).sort((a, b) => Number(b) - Number(a));

  return (
    <StackedSection id="roadmap" zIndex={6} bg="bg-subtle">
      <style>{`
        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 0 4rem 0;
        }

        /* The vertical axis line */
        .timeline-container::after {
          content: '';
          position: absolute;
          width: 4px;
          background-color: var(--text-main);
          opacity: 0.15;
          top: 0;
          bottom: 0;
          left: 24px; /* Mobile line position */
          border-radius: 2px;
          z-index: 0;
        }
        @media (min-width: 768px) {
          .timeline-container::after {
            left: 50%;
            margin-left: -2px;
          }
        }

        .year-group {
          position: relative;
          margin-bottom: 3rem;
        }

        .year-marker-wrapper {
          position: relative;
          display: flex;
          justify-content: flex-start;
          margin-bottom: 2rem;
          z-index: 2;
        }
        @media (min-width: 768px) {
          .year-marker-wrapper {
            justify-content: center;
          }
        }

        .timeline-year-marker {
          background: var(--text-main);
          color: var(--bg);
          padding: 8px 24px;
          border-radius: 24px;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: bold;
          /* Align exactly on the mobile line */
          margin-left: 24px;
          transform: translateX(-50%);
          box-shadow: 0 0 0 6px var(--bg-subtle);
        }
        @media (min-width: 768px) {
          .timeline-year-marker {
            margin-left: 0;
            transform: none;
          }
        }

        .timeline-row {
          position: relative;
          display: flex;
          width: 100%;
          margin-bottom: 2rem;
          justify-content: flex-end; /* Mobile: Push to right */
          z-index: 1;
        }
        @media (min-width: 768px) {
          .timeline-row {
            justify-content: space-between;
          }
          /* Alternating left/right on desktop */
          .timeline-row:nth-child(even) {
            flex-direction: row-reverse;
          }
        }

        .timeline-empty-space {
          display: none;
        }
        @media (min-width: 768px) {
          .timeline-empty-space {
            display: block;
            width: 45%;
          }
        }

        .timeline-content {
          width: calc(100% - 64px); /* Mobile: Leaves room for line and padding */
          background: var(--card-bg);
          border: var(--doodle-border-width) solid var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
          position: relative;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .timeline-content:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--text-main);
        }
        [data-theme="dark"] .timeline-content:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        }
        @media (min-width: 768px) {
          .timeline-content {
            width: 45%; /* Desktop width */
          }
        }

        /* The connection dot */
        .timeline-dot {
          position: absolute;
          left: 24px; /* Mobile */
          top: 32px; /* Align with first line of text */
          width: 20px;
          height: 20px;
          background: var(--bg);
          border: 4px solid var(--text-main);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          box-shadow: 0 0 0 4px var(--bg-subtle);
        }
        @media (min-width: 768px) {
          .timeline-dot {
            left: 50%;
            top: 50%; /* Center dot on desktop */
          }
        }
        
        .timeline-row.track-project .timeline-dot { border-color: var(--accent-cyan); }
        .timeline-row.track-core .timeline-dot { border-color: var(--accent-yellow); }
        .timeline-row.track-cert .timeline-dot { border-color: var(--accent-pink); }

        /* Card Inner Styling */
        .card-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }
        
        .card-badge {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 4px;
          background: var(--bg-subtle);
          border: 1px solid var(--border-color);
        }
        .timeline-row.track-project .card-badge { background: var(--accent-cyan); color: #18181b; border-color: transparent; }
        .timeline-row.track-cert .card-badge { background: var(--accent-pink); color: #18181b; border-color: transparent; }
        
        .card-date {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .card-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .card-desc {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.5;
          opacity: 0.9;
          margin: 0 0 1rem 0;
        }

        .card-issuer {
          font-family: var(--font-body);
          font-size: 0.9rem;
          margin: 0 0 1rem 0;
          color: var(--text-muted);
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .card-tags span {
          font-size: 0.8rem;
          background: var(--bg-subtle);
          border: 1px solid var(--border-color);
          padding: 4px 10px;
          border-radius: 6px;
        }
      `}</style>

      <div className="container">
        <div className="page-header spawn-element is-visible" style={{ marginBottom: '3rem' }}>
          <span className="section-label">Experience & Milestones</span>
          <h1 className="display-text" style={{ fontSize: '3.2rem', marginBottom: '0.5rem' }}>
            The <span className="highlight">Roadmap.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
            A chronological timeline of my core academic milestones, side projects, and technical certifications.
          </p>
        </div>

        <div className="timeline-container spawn-element is-visible delay-100">
          {years.map((year) => (
            <div key={year} className="year-group">
              <div className="year-marker-wrapper">
                <div className="timeline-year-marker">{year}</div>
              </div>
              
              {graphData.filter(d => d.year === year).map((event) => (
                <div key={event.id} className={`timeline-row track-${event.track}`}>
                  <div className="timeline-empty-space"></div>
                  <div className="timeline-dot"></div>
                  
                  <div className="timeline-content">
                    <div className="card-meta">
                      <span className="card-badge">{event.track}</span>
                      {event.month && <span className="card-date">{event.month} {event.year}</span>}
                    </div>
                    
                    <h3 className="card-title">{event.title}</h3>
                    
                    {event.issuer && (
                      <p className="card-issuer">Issued by <strong>{event.issuer}</strong></p>
                    )}
                    
                    {event.desc && <p className="card-desc">{event.desc}</p>}
                    
                    {event.skills && (
                      <div className="card-tags">
                        {event.skills.map(skill => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </StackedSection>
  );
}
