import React, { useEffect, useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

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
    navigate(`/campeonato/${nomeCampeonato}`);
  };

  return (
    <div>
      {Object.keys(campeonatos).map((campeonato) => (
        <Link to={`/campeonato/${encodeURIComponent(campeonato)}`}>{campeonato}</Link>
      ))}
    </div>
  );
}

export default Campeonatos;
