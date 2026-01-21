import { useState } from 'react';
import { GithubIcon} from '../components/Icons';
import useScrollAnimation from '../components/useScrollAnimation';

//  ------- IMAGES --------
import DBimg from '/bot.jpg'
import ITAimg from "/data_visualization.jpg"
import AIPimg from "/physiotherapy.webp"
import LRNAimg from "/learn.png"
import HGimg from "/hangman.jpg"
import SMQimg from "/math.jpg"
import Mimg from "/minesweeper.jpg"
import MRimg from "/movie.jpg"
import PTimg from "/price.jpeg"
import PCGimg from "/profile.jpg"
import TPSGimg from "/snake.jpg"
import CVFimg from "/volume.jpg"
import WAimg from "/weather.jpg"
import GCCimg from "/cursor.png"
import SFOimg from "/file.jpg"
import ARSDSimg from "/arsd.png"
import TATWimg from '/techathon.jpg'

export default function Projects() {
  const projects = [
    {
      title: "Indian Tourism Analysis",
      category: "Data",
      desc: "Processed 50k+ rows of travel data to identify seasonal influx patterns.",
      tech: ["Powerpoint", "pandas", "PowerBI", "plotly", "Excel"],
      link: "https://github.com/KshavCode/data-analysis-case-studies/tree/master/indian-tourism-analysis" ,
      img: ITAimg
    },
    {
      title: "AI PhysioTherapy",
      category: "App",
      desc: "Mobile app developed using React Native, FastAPI, mediapipe to help people exercise in a better form",
      tech: ["Python", "React Native", "Javascript", "React", "fastapi", "SQL"],
      link: "https://github.com/KshavCode/therapease-app",
      img: AIPimg
    },
    {
      title: "Discord Bot",
      category: "Terminal",
      desc: "A powerful multi-command Discord bot, featuring slash commands, moderation tools, and more.",
      tech: ["Python", "flask", "discord.py", "JSON"],
      link: "https://bit.ly/3q7hDBB",
      img: DBimg
    },
    {
      title: "Google Play Store Analysis",
      category: "Data",
      desc: "Study on real world trends and extracting useful insights",
      tech: ["Kaggle", "pandas", "CSV", "Jupyter"],
      link: "https://github.com/KshavCode/data-analysis-case-studies/tree/master/play-store-analysis" ,
      img: ITAimg
    },
    {
      title: "Tech-A-Thon Website",
      category: "App",
      desc: "Society website collectively built by the team's effort",
      tech: ["Next.js", "Javascript", "React", "TailwindCSS"],
      link: "https://github.com/AI-ash/Tech-A-Thon" ,
      img: TATWimg
    },
    {
      title: "Learn React Native App",
      category: "App",
      desc: "What if a single app contains the info about different components of the React Native?",
      tech: ["React Native", "Javascript", "React"],
      link: "https://github.com/KshavCode/learn-react-native-app",
      img: LRNAimg
    },
    {
      title: "Smart File Organizer",
      category: "App",
      desc: "The One tap solution to 'sort and store in a folder' solution!",
      tech: ["Python", "GUI", "os", "tkinter", "CLI"],
      link: "https://github.com/KshavCode/smart-file-organizer" ,
      img: SFOimg
    },
    {
      title: "Gesture Controlled Cursor",
      category: "App",
      desc: "Helps you take control of the mouse using your index finger and handles click events!",
      tech: ["opencv", "mediapipe", "Hand Detection", "Python", "GUI"],
      link: "https://github.com/KshavCode/gesture-based-cursor-control" ,
      img: GCCimg
    },
    {
      title: "Profile Card Generator CLI",
      category: "Terminal",
      desc: "Get a customized way of creating and generating your ID card using the image editing and the art of data storage!",
      tech: ["CLI", "pillow", "pandas", "JSON"],
      link: "https://github.com/KshavCode/profile-card-generator-cli" ,
      img: PCGimg
    },
    {
      title: "Price Tracker",
      category: "Terminal",
      desc: "Terminal app which saves the link of products and tracks their price!",
      tech: ["Web Scraping", "BeautifulSoup", "pandas", "CLI", "CSV"],
      link: "https://github.com/KshavCode/price-tracker-cli" ,
      img: PTimg
    },
    {
      title: "Student Sleeping Pattern",
      category: "Data",
      desc: "Study on real world problems and extracting useful insights",
      tech: ["Kaggle", "CSV", "pandas", "Powerpoint", "Seaborn"],
      link: "https://github.com/KshavCode/data-analysis-case-studies/tree/master/student-sleeping-pattern" ,
      img: ITAimg
    },
    {
      title: "Minesweeper",
      category: "App",
      desc: "Can you complete the puzzle in the least amount of time?",
      tech: ["Python", "os", "GUI"],
      link: "https://github.com/KshavCode/minesweeper" ,
      img: Mimg
    },
    {
      title: "2 Player Snakes Game",
      category: "App",
      desc: "Can you complete the puzzle in the least amount of time?",
      tech: ["pygame", "2D", "Graphics", "GUI"],
      link: "https://github.com/KshavCode/two-player-snake-game" ,
      img: TPSGimg
    },
    {
      title: "Speed Math Quiz",
      category: "App",
      desc: "Can you climb up the leaderboard and be the top scorer in basic arithmetics?",
      tech: ["GUI", "tkinter", "pandas", "CSV"],
      link: "https://github.com/KshavCode/speed-math-quiz" ,
      img: SMQimg
    },
        {
      title: "Spotify Popular Songs Analysis",
      category: "Data",
      desc: "Research and uncovering myths by extracting useful insights",
      tech: ["Kaggle", "seaborn", "pandas", "CSV", "Jupyter"],
      link: "https://github.com/KshavCode/data-analysis-case-studies" ,
      img: ITAimg
    },
    {
      title: "Control Volume By Finger",
      category: "App",
      desc: "You take control of the device volume using your index finger!",
      tech: ["mediapipe", "GUI", "opencv", "Hand Detection", "numpy"],
      link: "https://github.com/KshavCode/gesture-based-volume-control" ,
      img: CVFimg
    },
    {
      title: "Classic Hangman",
      category: "App",
      desc: "Guess the whole word with 6 lives provided!",
      tech: ["Game", "GUI", "CLI", "Graphics", "tkinter", "Python"],
      link: "https://github.com/KshavCode/hangman-game" ,
      img: HGimg
    },
    {
      title: "Weather App",
      category: "App",
      desc: "To learn the basics of API and GUI altogether.",
      tech: ["requests", "API", "Python", "tkinter", "GUI"],
      link: "https://github.com/KshavCode/weather-app" ,
      img: WAimg
    },
    {
      title: "Movie Recommender",
      category: "Terminal",
      desc: "Provides top 10 movies to watch based on the user's watch history.",
      tech: ["Machine Learning", "Kaggle", "pandas", "vectors", "numpy"],
      link: "https://github.com/KshavCode/gesture-based-volume-control" ,
      img: MRimg
    },
    {
      title: "ARSD Saathi",
      category: "App",
      desc: "College app designed especially for ARSD, DU.",
      tech: ["selenium", "API", "React Native", "Python", "Web Scraping", "Javascript"],
      link: "https://github.com/KshavCode/arsd-saathi" ,
      img: ARSDSimg
    },
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Data', 'App', 'Terminal'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="section" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="container">
        
        {/* Header */}
        <div className="page-header animate-fade-up" style={{ marginBottom: '3rem' }}>
          <span className="section-label">The Archive</span>
          <h1 className="display-text" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
            Things that <span style={{ color: 'var(--text-accent)' }}>I Built.</span>
          </h1>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar animate-fade-up delay-100" style={{ justifyContent: 'flex-start', marginBottom: '2rem' }}>
          {filters.map(filter => (
            <button 
              key={filter} 
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* The Uniform Grid */}
        <div className="mosaic-grid animate-fade-up delay-200">
          {filteredProjects.map((project, index) => (
            <MosaicCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// Card Component (Visuals kept exactly as you liked)
function MosaicCard({ project, index }) {
  const ref = useScrollAnimation();
  
  return (
    <div ref={ref} className={`mosaic-card spawn-element delay-${index * 50}`}>
      
      {/* Background Image */}
      <div className="mosaic-bg">
        <img src={project.img} alt={project.title} loading="lazy" />
        <div className="mosaic-overlay" />
      </div>

      {/* Content */}
      <div className="mosaic-content">
        <div className="mosaic-top">
          <span className="mosaic-cat">{project.category}</span>
          <div className="mosaic-links">
              <a href={project.link} target="_blank" rel="noreferrer"><GithubIcon /></a>
          </div>
        </div>
        
        <div className="mosaic-info">
          <h3 className="mosaic-title">{project.title}</h3>
          <p className="mosaic-desc">{project.desc}</p>
          <div className="mosaic-tech">
             {project.tech.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>

    </div>
  );
}