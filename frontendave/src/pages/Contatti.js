import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../styles/Contatti.css';

// Dati delle location e corsi
const locations = [
  {
    name: 'Accademia Formainarte',
    address: 'Via Villoresi 26, Milano (Navigli)',
    position: [45.455163, 9.163979],
    citofono: 'Citofono 10',
    metro: 'MM Verde Romolo',
    courses: [
      '💃 Principiante: Lunedì dalle 20.00 alle 21.30',
      '💃 Intermedio 1: Martedì dalle 12.30 alle 14.00',
      '💃 Intermedio 2: Mercoledì dalle 20.00 alle 21.30',
      '💃 Solo Tecnica Inter. 1: Giovedì dalle 19.30 alle 21.30',
      '💃 Solo Tecnica Inter. 2: Giovedì dalle 19.30 alle 20.30'
    ]
  },
  {
    name: 'Casa de España',
    address: 'Via Marsala 8, Milano',
    position: [45.474345, 9.191298],
    metro: 'MM Verde Moscova',
    courses: [
      '💃 Princ/Inter: Martedì dalle 19.30 alle 21.30',
      '💃 Princ/Inter: Martedì dalle 19.30 alle 20.30'
    ]
  },
  {
    name: 'Euphoria Sportdance',
    address: 'Via Lombardia 15, Spirano (BG)',
    position: [45.664154, 9.575014],
    courses: [
      '💃 Baby Flamenco (dai 6 anni): Mercoledì dalle 17.00 alle 18.00'
    ]
  }
];

// Icona personalizzata per i marker
const customIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  shadowSize: [41, 41],
});

const Contatti = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Tempo di caricamento di 1 secondo
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contatti-container">
      <h1>📞 Contattami</h1>
      
      <Row className="justify-content-center">
        {/* Card Contatti */}
        <Col md={5}>
          <Card className="contatti-card">
            <Card.Body>
              <Card.Title>Informazioni di Contatto</Card.Title>
              <div className="contatti-info">
                <p>Accademia di Flamenco a Milano</p>
                <p><strong>Telefono:</strong> 📱 3479003452</p>
                <p><strong>Email:</strong> 📧 info.mariagiordanoflamenco@gmail.com</p>
                <p><strong>Social:</strong></p>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Card Contattami Form */}
        <Col md={5}>
          <Card className="contatti-card">
            <Card.Body>
              <Card.Title>Contattami</Card.Title>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Nome:</label>
                  <input type="text" id="name" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Messaggio:</label>
                  <textarea id="message" className="form-control" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Invia</button>
              </form>
            </Card.Body>
          </Card>
        </Col>

        {/* Card Mappa dei Corsi */}
        <Col md={10}>
          <Card className="contatti-card">
            <Card.Body>
              <Card.Title>Location dei Corsi</Card.Title>
              {loading ? (
                <div>Loading map...</div> // Messaggio di caricamento
              ) : (
                <MapContainer center={[45.464211, 9.190252]} zoom={12} style={{ height: "400px", width: "100%" }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {locations.map((location, index) => (
                    <Marker key={index} position={location.position} icon={customIcon}>
                      <Popup>
                        <strong>{location.name}</strong><br />
                        {location.address}<br />
                        {location.citofono && <span>🔔 {location.citofono}<br /></span>}
                        🚇 {location.metro}<br />
                        <strong>Corsi:</strong>
                        <ul>
                          {location.courses.map((course, i) => (
                            <li key={i}>{course}</li>
                          ))}
                        </ul>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contatti;