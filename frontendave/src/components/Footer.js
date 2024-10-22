import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container text-center">
        <div className="row">
          <p className="text-center">Accademia di Flamenco a Milano</p>
          <div className="col-md-4">
            <h5>📞 Contatti</h5>
            <p>📱 <strong>Telefono:</strong> 3479003452</p>
            <p>📧 <strong>Email:</strong> info.mariagiordanoflamenco@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h5>🌐 Link utili</h5>
            <ul className="list-unstyled">
              <li><a href="/home" className="footer-link">🏠 Home</a></li>
              <li><a href="/chi-sono" className="footer-link">👤 Chi Sono</a></li>
              <li><a href="/lezioni" className="footer-link">📚 Lezioni</a></li>
              <li><a href="/prossimi-eventi" className="footer-link">📅 Prossimi Eventi</a></li>
              <li><a href="/collaborazioni" className="footer-link">🤝 Collaborazioni</a></li>
              <li><a href="/galleria" className="footer-link">🖼 Galleria</a></li>
              <li><a href="/contatti" className="footer-link">✉️ Contatti</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>📱 Seguici</h5>
            <p>
              <a href="https://www.instagram.com/maria_giordano_flamenco/?hl=en" className="footer-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/" className="footer-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </p>
            <p>
              <a href="https://www.youtube.com/@mariagiordanoflamenco642" className="footer-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} /> YouTube
              </a>
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <p className="text-center">© 2024 Maria Giordano Flamenco</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;