import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./AboutMe.module.css"
import fotoReact from "../../assets/react.png";
import fotoHTML from "../../assets/html.png";
import fotoCSS from "../../assets/css.png";
import fotoTS from '../../assets/typescript.png'
import fotoCV from "../../assets/Norbert_Packanik_CV-1.png"

export default function AboutMe() {
    return (
        <div className={styles.container}>
            <div className={styles["container-1"]}>
                <div>
                    <div className={styles["text-container"]}>
                        <h1>O MNIE</h1>
                        <p>Witaj na mojej stronie! Jestem inżynierem informatyki i ekonometri z pasją do programowania i tworzenia innowacyjnych rozwiązań.</p>

                        <h2>Główne obszary zainteresowań zawodowych:</h2>
                        <ul>
                            <li>Programowanie w językach JavaScript, CSS, HTML i React.</li>
                            <li>Rozwiązywanie problemów i optymalizacja algorytmów.</li>
                            <li>Ekonometria i analiza danych.</li>
                        </ul>

                        <h2>Cele zawodowe na przyszłość:</h2>
                        <p>Doskonalenie umiejętności programowania w React</p>
                        <p>Tworzenie coraz lepszych aplikacji internetowych</p>
                        <p>Zrozumienie zagadnień związanych z testowaniem.</p>
                        <p>Awans w hierarchii zawodowej</p>
                        <p>Specjalizacja w dziedzinie</p>
                        <p>Rozwój kompetencji przywódczych</p>
                    </div>
                    <button className="btn btn-secondary">
                        <Link to="/portfolio" style={{ textDecoration: 'none', color: 'white' }}>
                            Zobacz moje portfolio
                        </Link>
                    </button>
                </div>

                <div>
                    <div className={styles["image-placeholder-cv"]}>
                        <a href="/Norbert_Packanik_CV.pdf" download>
                            <img src={fotoCV} alt="Zdjęcie CV" style={{ maxWidth: '80%', maxHeight: '110vh' }} />
                        </a>
                    </div>
                    <p></p>
                    <a href="/Norbert_Packanik_CV.pdf" download>
                        <button className="btn btn-secondary">
                            Pobierz CV
                        </button>
                    </a>
                </div>
            </div>

            <div className={styles["container-2"]}>
                <h5 style={{ color: 'white' }}>Technologie z  którymi pracuje:</h5>
                <div className={styles["image-placeholder"]}>
                    <img src={fotoReact} alt="Zdjęcie React" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
                <div className={styles["image-placeholder"]}>
                    <img src={fotoHTML} alt="Zdjęcie HTML" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
                <div className={styles["image-placeholder"]}>
                    <img src={fotoCSS} alt="Zdjęcie CSS" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
                <div className={styles["image-placeholder"]}>
                    <img src={fotoTS} alt="Zdjęcie TS" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
            </div>
        </div>
    )
}

