import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foton2p from "../../assets/n2p.jpg";
import fotoPawelFoto from "../../assets/pawelbfoto.PNG";
import fotoZP from "../../assets/zportfolio.PNG";

export default function Portfolio(props) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            imgSrc: foton2p,
            title: "nothing2play",
            text: "Jest to strona mojej pracy inżynierskiej. Zawiera bazę danych gier komputerówych oraz dwa algorytmy polecania tytułów użytkownikowi.",
            link: "https://nothing2play.netlify.app/",
        },
        {
            imgSrc: fotoPawelFoto,
            title: "Paweł B Foto",
            text: "Ta strona została wykonana dla młodego fotografa hobbisty. Zawiera jego przykładowe prace oraz ofertę.",
            link: "https://pawelbfoto.netlify.app/",
        },
        {
            imgSrc: fotoZP,
            title: "Zuzanna Packanik Portfolio",
            text: "Ta strona została wykonana dla studentki architektury. Zawiera jej projekty studenckie oraz wizualizacje.",
            link: "https://zuzannapackanik.netlify.app/",
        },
    ];

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className={styles['container']}>
            <div className={styles['my-carousel-container']}>
                <Carousel
                    className={styles['my-carousel']}
                    selectedItem={currentSlide}
                    onChange={handleSlideChange}
                >
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <img src={slide.imgSrc} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </Carousel>
                <div className={styles['my-text']}>
                    <a href={slides[currentSlide].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles['my-title']}>
                        {slides[currentSlide].title}
                    </a>
                    <p></p>
                    <a>{slides[currentSlide].text}</a>
                    <a
                        href={slides[currentSlide].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles['my-button']}
                    >
                        Odwiedz strone
                    </a>
                </div>
            </div>
        </div>
    );
}