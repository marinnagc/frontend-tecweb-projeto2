import React, { useEffect, useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import Favoritos from './components/favoritos';

const JogosFavoritados = () => {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
    console.log('1')
    
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/campeonatos/favoritos/")
        .then((res) => {
            console.log('2')
            console.log(res.data);
            setVideos(res.data);
        });
    }, []);
    
    return (
        <>
            <h2 className='titulo'>AAAAAqui estão as melhores partidas segundo você!!</h2>
            {videos.map((video) => (
                <div>
                    <h1 className='subtitulo'>{video.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: video.link}}></div>
                </div>
                
            ))}
        </>
    );
}
export default JogosFavoritados;