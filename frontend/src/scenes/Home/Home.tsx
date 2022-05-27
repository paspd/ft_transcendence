import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="home-container">
            <h1>Home page</h1>
            <Link to="/login">Log me in</Link>
        </div>
    );
}

export default Home;
