import React, { useEffect, useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import './favoritos.css';

const Favoritos = (props) => {
    const [campeonatos, setCampeonatos] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/campeonatos/favoritos/")
        .then((res) => setNotes(res.data));
    }, []);

    const deleteNote = async () => {
        await axios.delete(`http://localhost:8000/api/campeonatos/favoritos/${props.id}/`);
        props.loadNotes();
        };

  return (
    <>
    <h2 className='titulo'>Aqui estão as melhores partidas segundo você!</h2>
    <div className='videos'>
       <h3 className='subtitulo'>{props.title}</h3>
       <div className='video' dangerouslySetInnerHTML={{__html:props.Link}}></div>
    </div>
    </>
  );
}

export default Favoritos;
