import React from "react";
import styles from "./Home.module.css"
import Typewriter from 'react-typewriter-animate';
import "react-typewriter-animate/dist/Typewriter.css";
import portrait from "../../assets/me.png"

export default function Home(props) {
    return (
        <div className={styles["container"]}>
            <div className={styles["text-container"]}>
                <h1>
                    JESTEM
                    <Typewriter loop="true"
                        dataToRotate={[
                            [
                                { type: "word", text: " NORBERT PACKANIK" }
                            ],
                            [
                                { type: "word", text: " AMBITYM PROGRAMISTĄ" }
                            ]
                        ]}
                    />
                </h1>
                <h3 className={styles["additional-text"]}>
                    Jestem świeżo upieczonym inżynierem informatyki i ekonometrii.
                    Zajmuje się tworzeniem stron internetowych z wykorzystaniem frameworka React.
                </h3>
            </div>
            <div className={styles["image-container"]}>
                <img
                    src={portrait}
                    alt="Moje zdjęcie"
                    className={styles["portrait"]}
                    style={{ width: '60%', height: 'auto' }}
                />
            </div>
        </div>
    );
}