import React from 'react';
import { Container } from 'react-bootstrap';
import { Chrono } from 'react-chrono';
import '../styles/ChiSono.css';

const ChiSono = () => {
  const mappedEvents = [
    {
      title: "Inizio della Danza",
      cardTitle: "Inizio a studiare danza classica",
      cardSubtitle: "Età: 5 anni",
      cardDetailedText: "Inizio a studiare danza classica all’età di cinque anni presso la scuola di danza delle Orsoline di Milano.",
      media: {
        type: "IMAGE",
        source: {
          url: "images/timeline1.avif" // Sostituisci con l'URL della tua immagine
        }
      }
    },
    {
      title: "Incontro con Carmela e Lola Greco",
      cardTitle: "Incontro con le Danzatrici",
      cardSubtitle: "Formazione nell'Arte del Flamenco",
      cardDetailedText: "L'incontro con le Danzatrici Carmela Greco e Lola Greco mi ha introdotto all'Arte del Flamenco.",
      media: {
        type: "IMAGE",
        source: {
          url: "/images/timeline2.jpg" // Sostituisci con l'URL della tua immagine
        }
      }
    },
    {
      title: "Collaborazione con Elena Vicini",
      cardTitle: "Connubio prezioso",
      cardSubtitle: "Formazione di Danzatrice e Insegnante",
      cardDetailedText: "Dalla collaborazione con Elena Vicini nasce un connubio preziosissimo per la mia formazione.",
      media: {
        type: "IMAGE",
        source: {
          url: "/images/timeline3.jpg" // Sostituisci con l'URL della tua immagine
        }
      }
    },
    {
      title: "Attività di Perfezionamento",
      cardTitle: "Intensa attività in Spagna",
      cardSubtitle: "Periodici soggiorni tra Jerez, Málaga, Madrid e Siviglia",
      cardDetailedText: "Inizio un’intensa attività di perfezionamento in Spagna, con soggiorni regolari in città come Jerez de la Frontera, Málaga, Madrid e Siviglia.",
      media: {
        type: "IMAGE",
        source: {
          url: "/images/timeline4.webp" // Sostituisci con l'URL della tua immagine
        }
      }
    },
    {
      title: "Maestri di Flamenco",
      cardTitle: "I miei grandi Maestri",
      cardSubtitle: "Collaborazione con artisti di fama",
      cardDetailedText: "Tra i miei più grandi Maestri ci sono Manuel Betanzos, Maria del Mar Moreno, Pastora Galván, Matilde Coral, La Truco, Mercedes Ruiz e La Lupi Bailaora.",
      media: {
        type: "IMAGE",
        source: {
          url: "/images/timeline5.avif" // Sostituisci con l'URL della tua immagine
        }
      }
    },
    {
      title: "Approfondimento della Tecnica Coreografica",
      cardTitle: "Ricerca dell'Estetica e della Disciplina",
      cardSubtitle: "Coreografia personale",
      cardDetailedText: "Il forte legame con i miei Maestri mi consente di approfondire la Tecnica Coreografica e coreografare personalmente tutte le mie Danze e quelle degli Allievi.",
      media: {
        type: "IMAGE",
        source: {
          url: "/images/timeline6.jpg" // Sostituisci con l'URL della tua immagine
        }
      }
    }
  ];

  return (
    <Container className="chi-sono-container">
      <h1 className="chi-sono-title">Chi Sono</h1>
      <Chrono items={mappedEvents} mode="VERTICAL_ALTERNATING" />
    </Container>
  );
};

export default ChiSono;