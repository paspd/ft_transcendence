import React from 'react';
import {
    BrowserRouter as Router,
Routes,
    Route,
    //Link,
    Navigate
} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './scenes/Home/Home'
import Login from './scenes/Login/Login'

function App() {
  return (
    <div className="app-container">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
