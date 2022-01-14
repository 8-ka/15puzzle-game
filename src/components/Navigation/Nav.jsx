import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav className="app__nav-bar background">
            <ul className="nav-bar__ul">
                <li className="nav-bar__item"><NavLink to="/About" className='nav-bar__link'>About</NavLink></li>
                <li className="nav-bar__item"><NavLink to="/Rules" className='nav-bar__link'>Rules</NavLink></li>
                <li className="nav-bar__item"><NavLink to="/Game" className='nav-bar__link'>Game</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;