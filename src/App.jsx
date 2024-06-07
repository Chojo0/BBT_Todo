import React, { useState } from 'react';
import './app.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import AgeConfirmation from './AgeConfirmation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import 'swiper/swiper-bundle.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    const [showAgeConfirmation, setShowAgeConfirmation] = useState(true); // Estado para mostrar el mensaje de confirmación de edad
    const [isAdult, setIsAdult] = useState(false); // Estado para controlar si el usuario es adulto

    const handleAgeConfirmation = (isAdult) => {
        setIsAdult(isAdult);
        setShowAgeConfirmation(false); // Oculta el mensaje de confirmación de edad cuando el usuario confirma su edad
    };

    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={isAdult ? <Home /> : <AgeConfirmation onConfirm={handleAgeConfirmation} />} />
                </Routes>
                <Main />
                <Footer />
            </Router>
        </CartProvider>
    );
}

export default App;
