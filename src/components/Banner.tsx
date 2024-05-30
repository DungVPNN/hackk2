import React, { useState } from 'react';
import './Banner.scss';

const Banner: React.FC = () => {
const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
    "/banner-1.jpg",
    "/banner-2.jpg",
    "/banner-3.jpg",
    "/banner-4.jpg",
    "/banner-5.jpg",
];

const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
};

const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
};

const goToSlide = (index: number) => {
    setCurrentSlide(index);
};

return (
    <div className="banner-container">
        <div className="banner">
            {slides.map((slide, index) => (
                <div
                    className={`slide ${index === currentSlide ? 'active' : 'hidden'}`}
                    key={index}
                >
                    <img
                        className="banner-image"
                        src={slide}
                        alt={`Banner-${index + 1}`}
                    />
                </div>
            ))}
            <a className="prev" onClick={prevSlide}>&#10094;</a>
            <a className="next" onClick={nextSlide}>&#10095;</a>
        </div>
        <div className="dots">
            {slides.map((_, index) => (
                <span
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                ></span>
            ))}
        </div>
    </div>
);
};
export default Banner;
