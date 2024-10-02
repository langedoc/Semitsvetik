import style from './Navbar.module.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { IoMdCloseCircle, IoMdMenu } from "react-icons/io";
import logo from '../../assets/images/logo.png';

export default function Navbar() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={style.header}>
            <nav>
                <div className={style.menuIcon}>
                    {isMenuOpen ? <IoMdCloseCircle onClick={toggleMenu}/> : <IoMdMenu onClick={toggleMenu}/>}
                </div>
                <div className={style.logoContainer}>
                    <img src={logo} className={style.logo} />
                </div>
                <div>
                    <ul
                        className={`${style.list} ${isMenuOpen && style.menuOpen}`}
                        onClick={toggleMenu}
                    >
                        <li>
                            <Link to="/" className={style.link}>Главная</Link>
                        </li>
                        <li>
                            <Link to="/about" className={style.link}>О нас</Link>
                        </li>
                        <li>
                            <Link to="/school" className={style.link}>Школа Семицветика</Link>
                        </li>
                        <li>
                            <Link to="/courses" className={style.link}>Курсы испанского языка</Link>
                        </li>
                        <li>
                            <Link to="/events" className={style.link}>Мероприятия</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={style.link}>Контакты</Link>
                        </li>
                    </ul>
                </div>            
            </nav>
        </header>
    );
};