import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

const Coracao = () => {
    const [hovered, setHovered] = useState(false);
    const [filled, setFilled] = useState(false);

    const handleMouseEnter = () => {
        if (!filled) setHovered(true);
    };

    const handleMouseLeave = () => {
        if (!filled) setHovered(false);
    };

    const handleClick = () => {
        setFilled(!filled);
        setHovered(filled); // Se for desmarcar, desativa o hover também
    };

    return (
        <FontAwesomeIcon 
            icon={filled || hovered ? fasHeart : farHeart} 
            style={{ fontSize: '48px', color: 'red', cursor: 'pointer' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        />
    );
};

export default Coracao;
