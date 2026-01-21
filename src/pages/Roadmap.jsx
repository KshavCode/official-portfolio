import useScrollAnimation from '../components/useScrollAnimation';

// ------------ IMAGES ---------------
import fcc_sql from '/fcc_sql.jpg';
import fcc_data from '/fcc_data.jpg';
import fcc_a2 from '/fcc_a2.jpg';
import fcc_b1 from '/fcc_b1.jpg';
import udemy_prompt from '/udemy_prompt.jpg';
import udemy_python from '/udemy_python.jpg';
import udemy_excel from '/udemy_excel.jpg';
import cs50p from '/cs50p.jpg';
import college_programming from '/college_programming.jpg'

export default function Certifications() {
  const timelineData = [
    {
      type: "cert",
      year: "2026",
      title: "Relational Database",
      issuer: "freeCodeCamp",
      skills: ["Git", "Bash", "Scripting", "PostgreSQL", "Nano"],
      img: fcc_sql
    },
    {
      type: "milestone",
      year: "2026",
      month: "January",
      title: "Participated in UIDAI Hackathon",
      desc: "Process the data and retrieve key insights from the data to make better decisions"
    },
    {
      type: "cert",
      year: "2026",
      title: "Data Analysis using Python",
      issuer: "freeCodeCamp",
      skills: ["Python", "Seaborn", "Matplotlib", "Pandas", "CSV"],
      img: fcc_data
    },
    {
      type: "milestone",
      year: "2026",
      month: "January",
      title: "Idea Of ARSD Saathi",
      desc: "Started looking into efficient ways of data extraction using selenium"
    },
    {
      type: "cert",
      year: "2026",
      title: "Mastering Prompt Engineering: From Beginner to AI Expert",
      issuer: "Udemy",
      skills: ["ChatGPT", "Prompts", "Chain-of-Thoughts", "Zero Shot"],
      img: udemy_prompt
    },
    {
      type: "cert",
      year: "2026",
      title: "A2 English For Developers",
      issuer: "freeCodeCamp",
      skills: ["Adaptation", "Communication"],
      img: fcc_a2
    },
    {
      type: "milestone",
      year: "2026",
      month: "January",
      title: "GitHub Profile Refinement",
      desc: "Modified READMEs, inserted virtual environments and redefined titles"
    },
    {
      type: "cert",
      year: "2026",
      title: "The Complete Microsoft Excel Data Analysis: Basic to Advanced",
      issuer: "Udemy",
      skills: ["Excel", "Data Analysis", "Pivot Table", "XLOOKUP"],
      img: udemy_excel
    },
    {
      type: "cert",
      year: "2026",
      title: "B1 English For Developers",
      issuer: "Udemy",
      skills: ["Excel", "Data Analysis", "Pivot Table", "XLOOKUP"],
      img: udemy_excel
    },
    {
      type: "cert",
      year: "2025",
      title: "Learn Python By Coding: 10 Projects",
      issuer: "Udemy",
      skills: ["Python", "OOPs", "Methods", "Real-world"],
      img: udemy_python
    },
    {
      type: "milestone",
      year: "2025",
      month: "OCTOBER",
      title: "SIH Hackathon Participation",
      desc: "You experience new stuff when you jump into the real world"
    },
    {
      type: "milestone",
      year: "2025",
      month: "OCTOBER",
      title: "Idea of TherapEase",
      desc: "Started with Confusions, ended with a Change"
    },
    {
      type: "cert",
      year: "2025",
      title: "Enigma Escape",
      issuer: "Ram Lal Anand College, Delhi University",
      skills: ["Problem-solving", "Python", "Competition"],
      img: college_programming
    },
    {
      type: "milestone",
      year: "2025",
      month: "AUGUST",
      title: "Tech-A-Thon Technical Team",
      desc: "Joined the society and designed the website with a team"
    },
    {
      type: "cert",
      year: "2025",
      title: "CS50's Introduction to Programming with Python",
      issuer: "Harvard University",
      skills: ["Problem-solving", "Python", "Critical-thinking", "Projects"],
      img: cs50p
    },
    {
      type: "milestone",
      year: "2024",
      month: "APRIL",
      title: "Research on real world data",
      desc: "Performed analysis and visualizations using plotly, seaborn, pandas, etc."
    },
    {
      type: "milestone",
      year: "2024",
      month: "FEBRUARY",
      title: "Beginning Leetcode",
      desc: "Studied about data structures using C++ and started solving questions on platforms"
    },
    {
      type: "milestone",
      year: "2023",
      month: "SEPTEMBER",
      title: "Data Visualization",
      desc: "Thouroughly studied about data and its use to make accurate decisions"
    },
    {
      type: "milestone",
      year: "2023",
      month: "AUGUST",
      title: "Start of the College Life",
      desc: "New beginnings..."
    },
  ];

  // 1. Extract Unique Years to determine groups (e.g., ['2024', '2023', '2022'])
  const uniqueYears = [...new Set(timelineData.map(item => item.year))];

  return (
    <section className="section" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <div className="page-header animate-fade-up" style={{ marginBottom: '5rem' }}>
          <span className="section-label">Timeline</span>
          <h1 className="display-text" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
            Learning <span style={{ color: 'var(--text-accent)' }}>Curve.</span>
          </h1>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line" />

          {timelineData.map((item, index) => {
            // 2. Find the index of the current item's year in the unique list
            const yearIndex = uniqueYears.indexOf(item.year);
            
            // 3. Even years (0, 2...) go Left, Odd years (1, 3...) go Right
            const position = yearIndex % 2 === 0 ? 'left' : 'right';

            return (
              <TimelineItem 
                key={index} 
                data={item} 
                index={index} 
                position={position} 
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

function TimelineItem({ data, index, position }) {
  const ref = useScrollAnimation();
  
  return (
    <div 
      ref={ref} 
      className={`timeline-item ${position} spawn-element delay-${index * 100}`}
    >
      <div className="timeline-dot">
        <div className="dot-inner" />
      </div>

      <div className="timeline-date">
        <span>{data.year}</span>
      </div>

      <div className="timeline-content">
        
        {data.type === 'cert' ? (
          <div className="cert-glass-card">
            <div className="cert-visual">
              <img src={data.img} alt={data.issuer} />
            </div>
            
            <div className="cert-details">
              <div className="cert-top">
                <span className="cert-issuer">{data.issuer}</span>
              </div>
              <h3 className="cert-name">{data.title}</h3>
              <div className="cert-tags">
                {data.skills.map(skill => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        ) : (
          <div className="milestone-card">
            <div className="milestone-header">
               <span className="milestone-month">{data.month}</span>
               <div className="milestone-line"></div>
            </div>
            <h3 className="milestone-title">{data.title}</h3>
            {data.desc && <p className="milestone-desc">{data.desc}</p>}
          </div>
        )}

      </div>
    </div>
  );
}