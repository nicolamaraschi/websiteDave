import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Lezioni.css';

const Lezioni = () => {
  const lezioniData = [
    {
      livello: "Principiante",
      orario: "Lunedì dalle 20.00 alle 21.30",
      location: "Accademia Formainarte",
      indirizzo: "Via Villoresi 26, Milano (Navigli)",
      citofono: "Citofono 10",
      metro: "MM Verde Romolo",
    },
    {
      livello: "Princ/Inter",
      orario: "Martedì dalle 19.30 alle 21.30",
      location: "Casa de España",
      indirizzo: "Via Marsala 8, Milano",
      metro: "MM Verde Moscova",
    },
    {
      livello: "Princ/Inter",
      orario: "Martedì dalle 19.30 alle 20.30",
      location: "Casa de España",
      indirizzo: "Via Marsala 8, Milano",
      metro: "MM Verde Moscova",
    },
    {
      livello: "Intermedio 1",
      orario: "Martedì dalle 12.30 alle 14.00",
      location: "Accademia Formainarte",
      indirizzo: "Via Villoresi 26, Milano (Navigli)",
      citofono: "Citofono 10",
      metro: "MM Verde Romolo",
    },
    {
      livello: "Intermedio 2",
      orario: "Mercoledì dalle 20.00 alle 21.30",
      location: "Accademia Formainarte",
      indirizzo: "Via Villoresi 26, Milano (Navigli)",
      citofono: "Citofono 10",
      metro: "MM Verde Romolo",
    },
    {
      livello: "Solo Tecnica Inter. 1",
      orario: "Giovedì dalle 19.30 alle 21.30",
      location: "Accademia Formainarte",
      indirizzo: "Via Villoresi 26, Milano (Navigli)",
      citofono: "Citofono 10",
      metro: "MM Verde Romolo",
    },
    {
      livello: "Solo Tecnica Inter. 2",
      orario: "Giovedì dalle 19.30 alle 20.30",
      location: "Accademia Formainarte",
      indirizzo: "Via Villoresi 26, Milano (Navigli)",
      citofono: "Citofono 10",
      metro: "MM Verde Romolo",
    },
    {
      livello: "Baby Flamenco (dai 6 anni)",
      orario: "Mercoledì dalle 17.00 alle 18.00",
      location: "Euphoria Sportdance",
      indirizzo: "Via Lombardia 15, Spirano (BG)",
    }
  ];

  return (
    <div className="lezioni-container">
      <h1 className="lezioni-title">📅 Lezioni di Flamenco</h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-light">
            <tr>
              <th>Livello</th>
              <th>Orario</th>
              <th>Location</th>
              <th>Indirizzo</th>
              <th>Citofono</th>
              <th>Metro</th>
            </tr>
          </thead>
          <tbody>
            {lezioniData.map((lezione, index) => (
              <tr key={index}>
                <td>💃 {lezione.livello}</td>
                <td>⏰ {lezione.orario}</td>
                <td>📍 {lezione.location}</td>
                <td>🏢 {lezione.indirizzo}</td>
                <td>{lezione.citofono ? `🔔 ${lezione.citofono}` : '-'}</td>
                <td>{lezione.metro ? `🚇 ${lezione.metro}` : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lezioni;