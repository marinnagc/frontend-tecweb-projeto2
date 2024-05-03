import React, { useEffect, useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import AppBar from './components/AppBar';

const JogosFavoritados = () => {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();

    const apagarNote = (id) => {

        const data = {
            "id": id
        }
    
        axios
            .delete(`https://projeto-2-backend-mavi-1.onrender.com/api/campeonatos/apagados/${id}/`, data)
            .then((res) => {
                axios
                    .get("https://projeto-2-backend-mavi-1.onrender.com0/api/campeonatos/favoritos/")
                    .then((res) => {
                        setVideos(res.data);
                    });
                })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        axios
        .get("https://projeto-2-backend-mavi-1.onrender.com/api/campeonatos/favoritos/")
        .then((res) => {
            setVideos(res.data);
        });
    }, []);
    
    return (
        <>
        <AppBar></AppBar>
            <h2 className='titulo'>Aqui estão as melhores partidas segundo você!</h2>
            {videos.map((video) => (
                <>
                <div className='video' dangerouslySetInnerHTML={{__html: video.link}}></div>
                <div className='linha'>
                    <h1 className='titulo'>{video.title}</h1>
                    <button className='professional-button' onClick={(e) => apagarNote(video.id)}>Desfavoritar</button>
                </div>
                </>
            ))}
        </>
    );
}
export default JogosFavoritados;