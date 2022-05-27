import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navigation">
            <Link to="/" className="brand-name">ft_transcendence</Link>
            <div className="navigation-menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Log in</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
