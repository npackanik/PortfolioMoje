import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import './Header.css';

function Header() {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div style={{ width: '100%', height: '5em' }}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                <div className="nav-text">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '30px' }}>
                        Norbert Packanik REACT DEVELOPER
                    </Link>
                </div>
            </nav>

            <div className={menu_class}><ul>
                <li className="linkStyle"><a href="/" style={{ textDecoration: 'none', color: 'black' }}><FaHome /> Strona główna</a></li>
                <li className="linkStyle"><a href="/o-mnie" style={{ textDecoration: 'none', color: 'black' }}><FaUser /> O mnie</a></li>
                <li className="linkStyle"><a href="/portfolio" style={{ textDecoration: 'none', color: 'black' }}><FaFileAlt /> Portfolio</a></li>
                <li className="linkStyle"><a href="/kontakt" style={{ textDecoration: 'none', color: 'black' }}><FaEnvelope /> Kontakt</a></li>
            </ul>
            </div>

        </div >
    )
}

export default Header;