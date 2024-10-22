// Importa Routes invece di Switch
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChiSono from './pages/ChiSono';
import Lezioni from './pages/Lezioni';
import ProssimiEventi from './pages/ProssimiEventi';
import Collaborazioni from './pages/Collaborazioni';
import Galleria from './pages/Galleria';
import Contatti from './pages/Contatti';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-sono" element={<ChiSono />} />
        <Route path="/lezioni" element={<Lezioni />} />
        <Route path="/prossimi-eventi" element={<ProssimiEventi />} />
        <Route path="/collaborazioni" element={<Collaborazioni />} />
        <Route path="/galleria" element={<Galleria />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;