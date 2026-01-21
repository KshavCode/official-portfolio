import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { Sun, Moon } from './Icons'; 

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* 1. The Sticky Navbar (Z-Index: 1000) */}
      <nav className="navbar">
        <div className="container nav-flex">
          
          <Link to="/" className="brand" onClick={closeMenu}>Keshav Pal</Link>
          
          {/* Desktop Menu */}
          <div className="desktop-menu">
            <Link to="/projects">Works</Link>
            <Link to="/roadmap">Roadmap</Link>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="mobile-controls">
            <button 
              className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="bar top"></span>
              <span className="bar middle"></span>
              <span className="bar bottom"></span>
            </button>
          </div>

        </div>
      </nav>

      {/* 2. The Drawer (MOVED OUTSIDE NAV) (Z-Index: 2000+) */}
      
      {/* Backdrop */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      />

      {/* Sliding Panel */}
      <aside className={`drawer-panel ${isOpen ? 'active' : ''}`}>
        
        <div className="drawer-header">
          <span className="drawer-title">Menu</span>
          <button onClick={toggleTheme} className="theme-toggle-drawer">
              {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>

        <div className="drawer-links">
          <Link to="/projects" onClick={closeMenu}>Works</Link>
          <Link to="/roadmap" onClick={closeMenu}>Roadmap</Link>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
        </div>

        <div className="drawer-footer">
          <p>Made with 💖, by Keshav</p>
        </div>
      </aside>
    </>
  );
}