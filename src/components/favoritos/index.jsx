import React, { useEffect, useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import './favoritos.css';
import AppBar from '../AppBar';

const Favoritos = (props) => {

  return (
    <>
    <AppBar />
    <h2 className='titulo'>Aqui estão as melhores partidas segundo você!!!!</h2>
    <h1 className='subtitulo'>{props.title}</h1>
    <div dangerouslySetInnerHTML={{__html: props.link}}></div>
    </>
  );
}

export default Favoritos;
