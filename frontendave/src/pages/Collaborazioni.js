import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Collaborazioni.css';

const collaborazioniData = [
  { title: 'Collaborazione 1', imgSrc: '/images/collaborazione1.jpg' },
  { title: 'Collaborazione 2', imgSrc: '/images/collaborazione2.jpg' },
  { title: 'Collaborazione 3', imgSrc: '/images/collaborazione3.jpg' },
  { title: 'Collaborazione 4', imgSrc: '/images/collaborazione4.jpg' },
  { title: 'Collaborazione 5', imgSrc: '/images/collaborazione5.jpg' },
  { title: 'Collaborazione 6', imgSrc: '/images/collaborazione6.jpg' },
  { title: 'Collaborazione 7', imgSrc: '/images/collaborazione7.jpg' },
  { title: 'Collaborazione 8', imgSrc: '/images/collaborazione8.jpg' },
  { title: 'Collaborazione 9', imgSrc: '/images/collaborazione9.jpg' }
];

const Collaborazioni = () => {
  return (
    <div className="collaborazioni-container">
      <h1 className="collaborazioni-title">Collaborazioni Speciali</h1>
      <Carousel>
        {collaborazioniData.map((collaborazione, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={collaborazione.imgSrc}
              alt={`Slide ${index}`}
            />
            <Carousel.Caption>
              <h3>{collaborazione.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Collaborazioni;