// Dentro de App.jsx ou main.jsx
import {Routes, Route } from 'react-router-dom';
import Campeonatos from './components/campeonatos';
import Jogos from './components/jogos';
import './App.css';
import React from 'react';
import AppBar from './components/AppBar';

function App() {
  return (
    <>
    <AppBar></AppBar>
    <Routes>
      <Route path="/" element={<Campeonatos />} />
      <Route path="/campeonato/:nome" element={<Jogos />} />
    </Routes>
    </>
  );
}

export default App;
