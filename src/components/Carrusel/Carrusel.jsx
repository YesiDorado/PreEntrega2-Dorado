import React, { useState } from "react";
import './carrusel.css';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        '/src/assets/bolsa.jpg',
        '/src/assets/juguete.jpg',
        '/src/assets/pelota.jpg',
        '/src/assets/plato.jpg',
        '/src/assets/rascador.png',
    ];

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="carousel">
            <h2>Descubri nuestros productos</h2>
            <img className="carousel-image" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            <div className="carousel-buttons">
                <button className="carousel-button prev" onClick={handlePrev}>
                    &lt;
                </button>
                <button className="carousel-button next" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
}