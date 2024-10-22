import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        {/* Aggiungi il logo qui */}
        <img src="/images/logo per flamenco.png" alt="Logo Accademia Flamenco" className="home-logo" />
        <h1 className="home-title">Maria Giordano Flamenco</h1>
        <h2 className="home-subtitle">Accademia di Flamenco a Milano</h2>
      </div>

      <Container className="home-content">
        <Row>
          <Col sm={4}>
            <div className="home-section">
              <img src="/images/lezione.jpeg" alt="Lezioni" className="home-image" />
              <h3 className="home-section-title">Lezioni</h3>
            </div>
          </Col>
          <Col sm={4}>
            <div className="home-section">
              <img src="/images/stage.jpeg" alt="Stage" className="home-image" />
              <h3 className="home-section-title">Stage</h3>
            </div>
          </Col>
          <Col sm={4}>
            <div className="home-section">
              <img src="/images/un spettacolo di danza flamenco.png" alt="Spettacoli" className="home-image" />
              <h3 className="home-section-title">Spettacoli</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className="home-section">
              <h3 className="home-section-title">Viaggi Culturali nel mondo del Flamenco</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;