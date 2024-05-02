// Dentro de App.jsx ou main.jsx
import {Routes, Route } from 'react-router-dom';
import Campeonatos from './components/campeonatos';
import Jogos from './components/jogos';
import './App.css';
import React from 'react';
import AppBar from './components/AppBar';
import Favoritos from './JogosFavoritados';

function App() {
  return (
    <>
    <AppBar></AppBar>
    <Routes>
      <Route path="/" element={<Campeonatos />} />
      <Route path="/campeonato/:nome" element={<Jogos />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
    </>
  );
}

export default App;
