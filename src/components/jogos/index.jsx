import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AppBar from '../AppBar';
import './index.css';

const Jogos = () => {
  const [campeonatos, setCampeonatos] = useState({});  // Inicializa como objeto vazio
  const { nome } = useParams(); // Captura o nome do campeonato da URL
  const nomeCampeonato = decodeURIComponent(nome);  // Decodifica o nome do campeonato
  

  useEffect(() => {
    axios.get('http://localhost:8000/api/campeonatos/')
      .then(response => {
        setCampeonatos(response.data);  // Supõe que a resposta é um objeto conforme descrito
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <AppBar />
      <h1 className='title'>Partidas de {nomeCampeonato}</h1>
      {campeonatos[nomeCampeonato] ? (
        <div>
          {campeonatos[nomeCampeonato].map((jogo, index) => (
            <div key={index}>
              <h3 className='partida'>{jogo[0]}</h3>
              <div className='video' dangerouslySetInnerHTML={{ __html: jogo[1] }} />
            </div>
          ))}
        </div>
      ) : (
        <p className='partida'>Não há partidas disponíveis para este campeonato.</p>
      )}
    </div>
  );
};

export default Jogos;