import React from "react";
import styles from "./Info.module.css"

export default function Info(props) {
    return (
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <h1>Kontakt</h1>
          <p>
            Zapraszam do kontaktu w dowolnej sprawie. Chętnie odpowiem na Twoje pytania.
          </p>
          <p>
            Dostępny jestem od poniedziałku do piątku, w godziach 8-20.
          </p>
          <ul>
            <li>Email: norbert.packanik@gmail.com</li>
            <li>Telefon: +48 503 738 231</li>
            <li>Adres: ul. Dębowa 85, 38-530 PIELNIA</li>
          </ul>
        </div>
      </div>
    );
  }