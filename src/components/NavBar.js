import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/audio">Audio</Link></li>
                <li><Link to="/category/computers">Computadoras</Link></li>
                <li><Link to="/category/cameras">Cámaras</Link></li>
                <li><Link to="/category/phones">Teléfonos</Link></li>
                <li><Link to="/category/gaming">Consolas</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
