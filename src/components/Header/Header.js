import { faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <p> <FontAwesomeIcon icon={faPenFancy}></FontAwesomeIcon> Pen Picker Point</p>
        </div>
    );
};

export default Header;