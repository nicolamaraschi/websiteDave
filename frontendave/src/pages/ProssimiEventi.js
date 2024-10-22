import React from 'react';
import '../styles/ProssimiEventi.css';

const ProssimiEventi = () => {
  const eventiData = [
    {
      titolo: "La Lupi Bailaora",
      data: "26 e 27 Ottobre",
      immagine: "https://via.placeholder.com/300x200.png?text=Locandina+Evento", // Sostituisci con l'URL della tua immagine
      descrizione: "Accompagnata dalla chitarra di Curro de Maria",
    }
  ];

  return (
    <div className="eventi-container">
      <h1 className="eventi-title">📅 Prossimi Eventi</h1>
      <div className="eventi-list">
        {eventiData.map((evento, index) => (
          <div key={index} className="evento-card">
            <img src={evento.immagine} alt={evento.titolo} className="evento-image" />
            <h2 className="evento-titolo">🎶 {evento.titolo}</h2>
            <p className="evento-data">📅 {evento.data}</p>
            <p className="evento-descrizione">🎸 {evento.descrizione}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProssimiEventi;