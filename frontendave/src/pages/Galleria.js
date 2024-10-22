import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Galleria.css';

const galleriaData = [
  { imgSrc: '/images/galleria1.jpg' },
  { imgSrc: '/images/galleria2.jpg' },
  { imgSrc: '/images/galleria3.jpg' },
  { imgSrc: '/images/galleria4.jpg' },
  { imgSrc: '/images/galleria5.jpg' },
  { imgSrc: '/images/galleria6.jpg' },
  { imgSrc: '/images/galleria7.jpg' },
  { imgSrc: '/images/galleria8.jpg' },
  { imgSrc: '/images/galleria9.jpg' }
];

const Galleria = () => {
  return (
    <div className="galleria-container">
      <h1 className="galleria-title">Galleria</h1>
      <Carousel>
        {galleriaData.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.imgSrc}
              alt={`Galleria Slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Galleria;