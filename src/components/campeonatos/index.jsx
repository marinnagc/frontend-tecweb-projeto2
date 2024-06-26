import React, { useEffect, useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import './index.css';

const Campeonatos = () => {
  const [campeonatos, setCampeonatos] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/campeonatos/')
      .then(response => {
        setCampeonatos(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleCampeonatoClick = (nome) => {
    let nomeCampeonato = encodeURIComponent(nome.trim()); // Limpa e codifica a URL
    navigate(`http://localhost:8000/campeonato/${nomeCampeonato}`);
  };

  return (
    <>
    <h2 className='titulo'>Selecione um campeonato</h2>
    <div className='caixas'>
      {Object.keys(campeonatos).map((campeonato) => (
        <Link className='campeonato' to={`/campeonato/${encodeURIComponent(campeonato)}`}>{campeonato}</Link>
      ))}
    </div>
    </>
  );
}

export default Campeonatos;
