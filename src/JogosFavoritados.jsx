import React, { useEffect, useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import Favoritos from './components/favoritos';

const JogosFavoritados = () => {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/campeonatos/favoritos/")
        .then((res) => setNotes(res.data));
    }, []);
    
    return (
        <>
            {videos.map((video) => (
                <Favoritos
                key={video.id}
                title={video.title} 
                link={video.link} 
                />
            ))}
        </>
    );
}
export default JogosFavoritados;