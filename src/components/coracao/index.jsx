import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

const Coracao = ({ size = '48px' }) => {
    const [hovered, setHovered] = useState(false);
    const [filled, setFilled] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleClick = () => {
        setFilled(!filled);
        // Após clicar, o estado de 'hovered' deve refletir o novo estado de 'filled'
        setHovered(!filled);
    };

    return (
        <FontAwesomeIcon 
            icon={filled || hovered ? fasHeart : farHeart} 
            style={{ fontSize: size, color: 'red', cursor: 'pointer' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        />
    );
};

export default Coracao;
