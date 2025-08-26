import { Link, useLocation } from 'react-router';

const Header = () => {
  const location = useLocation();

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

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
              home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
              skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
              projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
