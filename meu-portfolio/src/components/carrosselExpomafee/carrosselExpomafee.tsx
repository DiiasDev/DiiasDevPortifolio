import { useState, useEffect } from 'react';
import './styles.css';

// Import images
import expomafe1 from '../../assets/images/expomafe8.jpg';
import expomafe2 from '../../assets/images/expomafe2.jpg';
import expomafe3 from '../../assets/images/expomafe3.jpg';
import expomafe4 from '../../assets/images/expomafe4.jpg';
import expomafe5 from '../../assets/images/expomafe9.jpg';
import expomafe6 from '../../assets/images/expomafe6.jpg';
import expomafe7 from '../../assets/images/expomafe7.jpg';

export default function CarosselExpomafee() {
    const images = [
        expomafe1,
        expomafe2,
        expomafe3,
        expomafe4,
        expomafe5,
        expomafe6,
        expomafe7,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(nextSlide, 4000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, currentIndex]);

    return (
        <div 
            className="carousel-container"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="carousel-wrapper">
                <button className="carousel-btn prev" onClick={prevSlide}>
                    &#8249;
                </button>
                
                <div className="carousel-content">
                    <div 
                        className="carousel-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="carousel-slide">
                                <img 
                                    src={image} 
                                    alt={`EXPOMAFE 2025 - Imagem ${index + 1}`}
                                    className={`${index === 0 ? 'image-position-up' : ''} ${index === 4 ? 'image-position-down' : ''}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button className="carousel-btn next" onClick={nextSlide}>
                    &#8250;
                </button>
            </div>

            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>

            <div className="carousel-counter">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}