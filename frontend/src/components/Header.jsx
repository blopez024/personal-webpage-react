import { Link, useLocation } from 'react-router';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    // If we're on the home page, scroll to section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Navigate to home then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, sectionId) => {
    handleNavClick(e, sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className={isMenuOpen ? 'mobile-menu-open' : ''}>
        <button className="mobile-menu-button" onClick={handleMenuClick}>
          <span className="menu-icon"></span>
        </button>
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
              home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>
              skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>
              projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
