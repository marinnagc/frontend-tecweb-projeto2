import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AppBar from '../AppBar';
import Coracao from '../coracao'; 
import './index.css';

const Jogos = () => {
  const [campeonatos, setCampeonatos] = useState({});  // Inicializa como objeto vazio
  const { nome } = useParams(); // Captura o nome do campeonato da URL
  const nomeCampeonato = decodeURIComponent(nome);  // Decodifica o nome do campeonato
  const [favorito, setFavorito] = useState(false)

  useEffect(() => {
    axios.get('https://projeto-2-backend-mavi-fqzl.onrender.com/api/campeonatos/')
      .then(response => {
        setCampeonatos(response.data);  // Supõe que a resposta é um objeto conforme descrito
      })
      .catch(error => console.log(error));
  }, []);

  const criarNote = (jogo) => {

    const data = {
        "title": jogo[0],
        "link": jogo[1]
    }

    axios
        .post("https://projeto-2-backend-mavi-fqzl.onrender.com/api/campeonatos/favoritos/", data)
        .catch((error) => console.log(error));
}

  const alternarFavorito = (jogo) => {
    setFavorito(!favorito);
    if(favorito === false){
        criarNote(jogo);
    }
  };

  return (
    <div>
      <AppBar />
      <h1 className='title'>Partidas de {nomeCampeonato}</h1>
      {campeonatos[nomeCampeonato] ? (
        <div>
          {campeonatos[nomeCampeonato].map((jogo, index) => (
            <div key={index} className='jogo-container'>
              <div className='video' dangerouslySetInnerHTML={{ __html: jogo[1] }} />
              <div className='linha'>
                <h3 className='partida'>{jogo[0]}</h3>
                <button onClick={() => criarNote(jogo)} type='button' className='professional-button'>Favoritar</button>
                {/* <button onClick={alternarFavorito(jogo)} type='button' className='professional-button'>{favorito ? 'Favoritar':'Desfavoritar'}</button> */}
              </div>
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
