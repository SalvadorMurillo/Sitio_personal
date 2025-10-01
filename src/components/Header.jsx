import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <span className="brand-name">Salvador Fernando Murillo Rosales</span>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('inicio')} className="nav-link">
              Inicio
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('sobre-mi')} className="nav-link">
              Sobre mí
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('pasatiempos')} className="nav-link">
              Pasatiempos
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
