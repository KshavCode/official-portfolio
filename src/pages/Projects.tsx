import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GithubIcon } from '../components/Icons';
import ImageFallback from '../components/ImageFallback';

interface ProjectItem {
  title: string;
  category: 'Data' | 'App' | 'Terminal';
  desc: string;
  tech: string[];
  link: string;
  img: string;
}

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      title: 'ARSD Saathi',
      category: 'App',
      desc: 'College portal automation utility & mobile application designed especially for ARSD, Delhi University.',
      tech: ['React Native', 'FastAPI', 'Selenium', 'PostgreSQL', 'Tailwind'],
      link: 'https://github.com/KshavCode',
      img: '/arsd.png',
    },
    {
      title: 'Indian Tourism Analysis',
      category: 'Data',
      desc: 'Processed 50k+ rows of travel and hotel booking data to identify seasonal tourism influx patterns.',
      tech: ['PowerPoint', 'Pandas', 'PowerBI', 'Plotly', 'Excel'],
      link: 'https://github.com/KshavCode/data-analysis-case-studies/tree/master/indian-tourism-analysis',
      img: '/data_visualization.jpg',
    },
    {
      title: 'QuickBill',
      category: 'App',
      desc: 'A lightweight, GUI-based desktop application designed to streamline billing and inventory for small businesses.',
      tech: ['GUI', 'SQLite3', 'Python', 'Tkinter', 'Automation'],
      link: 'https://github.com/KshavCode/quickbill-py',
      img: '/quickbill.png',
    },
    {
      title: 'Sortify',
      category: 'App',
      desc: 'One-tap automation tool to sort, group, and archive messy file directories by format and date.',
      tech: ['Python', 'GUI', 'OS', 'Tkinter', 'CLI'],
      link: 'https://github.com/KshavCode/sortify',
      img: '/file.jpg',
    },
    {
      title: 'Gesture Controlled Cursor',
      category: 'App',
      desc: 'Computer vision utility controlling system cursor movements and click events via real-time index finger tracking.',
      tech: ['OpenCV', 'MediaPipe', 'Hand Tracking', 'Python', 'GUI'],
      link: 'https://github.com/KshavCode/gesture-based-cursor-control',
      img: '/cursor.png',
    },
    {
      title: 'Profile Card Generator CLI',
      category: 'Terminal',
      desc: 'Automated CLI utility to generate standardized, custom-styled ID badge cards from structured datasets.',
      tech: ['CLI', 'Pillow', 'Pandas', 'JSON'],
      link: 'https://github.com/KshavCode/profile-card-generator-cli',
      img: '/profile.jpg',
    },
    {
      title: 'Price Tracker CLI',
      category: 'Terminal',
      desc: 'Background daemon and terminal app tracking e-commerce product prices with drop alert notifications.',
      tech: ['Web Scraping', 'BeautifulSoup', 'Pandas', 'CLI', 'CSV'],
      link: 'https://github.com/KshavCode/price-tracker-cli',
      img: '/price.jpeg',
    },
    {
      title: 'Student Sleeping Pattern Study',
      category: 'Data',
      desc: 'Statistical case study analyzing sleep duration correlation with academic stress and productivity.',
      tech: ['Kaggle', 'CSV', 'Pandas', 'PowerPoint', 'Seaborn'],
      link: 'https://github.com/KshavCode/data-analysis-case-studies/tree/master/student-sleeping-pattern',
      img: '/data_visualization.jpg',
    },
    {
      title: 'Minesweeper Python',
      category: 'App',
      desc: 'Classic logic puzzle implemented with custom algorithm generation, flags, and timer mechanics.',
      tech: ['Python', 'Algorithms', 'Tkinter', 'GUI'],
      link: 'https://github.com/KshavCode/minesweeper',
      img: '/minesweeper.jpg',
    },
    {
      title: '2 Player Snake Game',
      category: 'App',
      desc: 'Simultaneous multiplayer retro arcade snake game built with collision detection and custom sound triggers.',
      tech: ['Pygame', '2D Physics', 'Graphics', 'GUI'],
      link: 'https://github.com/KshavCode/two-player-snake-game',
      img: '/snake.jpg',
    },
    {
      title: 'Speed Math Quiz',
      category: 'App',
      desc: 'Rapid arithmetic trainer with time-attack challenges, score multipliers, and persistent high-score logs.',
      tech: ['GUI', 'Tkinter', 'Pandas', 'CSV'],
      link: 'https://github.com/KshavCode/speed-math-quiz',
      img: '/math.jpg',
    },
    {
      title: 'Spotify Popular Songs Analysis',
      category: 'Data',
      desc: 'Audio feature research discovering danceability, acousticness, and key tempo correlations across Billboard hits.',
      tech: ['Kaggle', 'Seaborn', 'Pandas', 'CSV', 'Jupyter'],
      link: 'https://github.com/KshavCode/data-analysis-case-studies',
      img: '/data_visualization.jpg',
    },
    {
      title: 'Finger Volume Control',
      category: 'App',
      desc: 'Hands-free OS volume adjustment via optical distance estimation between thumb and index landmarks.',
      tech: ['MediaPipe', 'OpenCV', 'Hand Detection', 'NumPy'],
      link: 'https://github.com/KshavCode/gesture-based-volume-control',
      img: '/volume.jpg',
    },
    {
      title: 'Classic Hangman Game',
      category: 'App',
      desc: 'Interactive vocabulary puzzle with visual ASCII hangman state progression and difficulty tiers.',
      tech: ['Game Dev', 'GUI', 'CLI', 'Tkinter', 'Python'],
      link: 'https://github.com/KshavCode/hangman-game',
      img: '/hangman.jpg',
    },
    {
      title: 'Live Weather App',
      category: 'App',
      desc: 'Desktop weather forecast client fetching real-time meteorological conditions via OpenWeather API.',
      tech: ['Requests', 'REST API', 'Python', 'Tkinter', 'GUI'],
      link: 'https://github.com/KshavCode/weather-app',
      img: '/weather.jpg',
    },
    {
      title: 'Movie Recommender System',
      category: 'Terminal',
      desc: 'Content-based recommendation engine utilizing cosine similarity vectors over plot summaries and genres.',
      tech: ['Machine Learning', 'Kaggle', 'Pandas', 'Vector Math', 'NumPy'],
      link: 'https://github.com/KshavCode/gesture-based-volume-control',
      img: '/movie.jpg',
    },
  ];

  const [activeFilter, setActiveFilter] = useState<'All' | 'Data' | 'App' | 'Terminal'>('All');
  const filters: Array<'All' | 'Data' | 'App' | 'Terminal'> = ['All', 'Data', 'App', 'Terminal'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <span className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)]">The Archive</span>
        <h1 className="text-4xl md:text-6xl font-black mt-2 mb-4 text-[var(--text-main)] font-[var(--font-heading)] leading-tight">
          Things that <span className="text-[var(--accent-cyan)]">I Built.</span>
        </h1>
        <p className="text-lg text-[var(--text-muted)] max-w-2xl font-[var(--font-body)]">
          A comprehensive catalog of applications, machine learning experiments, automation tools, and data research.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 font-[var(--font-body)] ${
              activeFilter === filter
                ? 'bg-[var(--text-main)] text-[var(--bg)] border-2 border-[var(--text-main)] shadow-md'
                : 'bg-transparent text-[var(--text-muted)] border-2 border-[var(--border-color)] hover:border-[var(--text-main)] hover:text-[var(--text-main)]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Animated Masonry/Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col bg-[var(--card-bg)] border-2 border-[var(--border-color)] rounded-2xl overflow-hidden cursor-pointer transition-colors duration-300 hover:border-[var(--text-main)]"
            >
              {/* Dynamic shadow glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-subtle)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none" />

              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-[var(--bg-subtle)] border-b-2 border-[var(--border-color)] z-10">
                <motion.div 
                  className="w-full h-full"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity">
                     <ImageFallback
                        src={project.img}
                        alt={project.title}
                        title={project.title}
                        fallbackType="project"
                      />
                  </div>
                </motion.div>
                
                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4 bg-[var(--bg)]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--border-color)] shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-main)] font-[var(--font-body)]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow z-10">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="text-xl font-bold font-[var(--font-heading)] leading-tight text-[var(--text-main)] group-hover:text-[var(--accent-cyan)] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub repo for ${project.title}`}
                    title="View on GitHub"
                    className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                  >
                    <GithubIcon />
                  </a>
                </div>
                
                <p className="text-[var(--text-muted)] font-[var(--font-body)] text-[0.95rem] leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold bg-[var(--bg-subtle)] border border-[var(--border-color)] px-2.5 py-1 rounded-md text-[var(--text-muted)] group-hover:border-[var(--text-muted)] transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

