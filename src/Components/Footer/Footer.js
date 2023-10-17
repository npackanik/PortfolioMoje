import React from "react";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
          <div className={styles.container}>
            <p>{new Date().getFullYear()} Norbert Packanik</p>
            <a
              href="https://www.linkedin.com/in/norbert-packanik/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
            >
              <FaLinkedin /> LinkedIn
            </a>

          </div>
        </footer>
      );
    }
