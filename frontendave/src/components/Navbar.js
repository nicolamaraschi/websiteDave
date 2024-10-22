import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'; // Aggiorna il CSS con lo stile per la navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-pink">
      <div className="container">
        {/* Sostituisci l'immagine del logo con il testo */}
        <Link to="/" className="navbar-logo" onClick={toggleMenu}>
          <span className="logo-text">Accademia di Flamenco a Milano</span>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleMenu}>🏠 HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/chi-sono" className="nav-link" onClick={toggleMenu}>👤 CHI SONO</Link>
            </li>
            <li className="nav-item">
              <Link to="/lezioni" className="nav-link" onClick={toggleMenu}>📝 LEZIONI</Link>
            </li>
            <li className="nav-item">
              <Link to="/prossimi-eventi" className="nav-link" onClick={toggleMenu}>📅 PROSSIMI EVENTI</Link>
            </li>
            <li className="nav-item">
              <Link to="/collaborazioni" className="nav-link" onClick={toggleMenu}>🤝 COLLABORAZIONI</Link>
            </li>
            <li className="nav-item">
              <Link to="/galleria" className="nav-link" onClick={toggleMenu}>📸 GALLERIA</Link>
            </li>
            <li className="nav-item">
              <Link to="/contatti" className="nav-link" onClick={toggleMenu}>📞 CONTATTI</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;