import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from './Icons';

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
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
      <nav className="navbar">
        <div className="container nav-flex">
          <Link to="/" target="_blank" className="brand" onClick={closeMenu}>
            Keshav Pal
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <a href="/#about">About</a>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''}>
              Projects
            </Link>
            <Link to="/roadmap" className={location.pathname === '/roadmap' ? 'active-link' : ''}>
              Timeline
            </Link>
            <a href="/#contact">Contact</a>
            <a href="/resume.pdf" download="KeshavPal_resume.pdf" onClick={closeMenu}>
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle dark/light mode"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
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

      {/* Backdrop */}
      <div
        className={`drawer-backdrop ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      {/* Sliding Panel */}
      <aside className={`drawer-panel ${isOpen ? 'active' : ''}`}>
        <div className="drawer-header">
          <span className="drawer-title">Menu</span>
          <button
            onClick={toggleTheme}
            className="theme-toggle-drawer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>

        <div className="drawer-links">
          <Link to="/#about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/roadmap" onClick={closeMenu}>
            Timeline
          </Link>
          <a href="/#contact" onClick={closeMenu}>
            Contact
          </a>
          <a href="/resume.pdf" download="KeshavPal_resume.pdf" onClick={closeMenu}>
            Resume
          </a>

        </div>

        <div className="drawer-footer">
          <p>Made with 💖 by Keshav</p>
        </div>
      </aside>
    </>
  );
}
