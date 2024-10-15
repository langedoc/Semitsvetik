import style from './Navbar.module.css';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { IoMdCloseCircle, IoMdMenu } from "react-icons/io";
import logo from '../../assets/logos/logo.png';

export default function Navbar() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={style.header}>
            <div className={style.logoContainer}>
                <NavLink to="/" className={style.logoContainer}>
                    <img src={logo} className={style.logo} alt={'logo'}/>
                </NavLink>
            </div>
            <nav>
                <div className={style.menuIcon}>
                    {isMenuOpen ? <IoMdCloseCircle onClick={toggleMenu}/> : <IoMdMenu onClick={toggleMenu}/>}
                </div>
                <div>
                    <ul
                        className={`${style.list} ${isMenuOpen && style.menuOpen}`}
                        onClick={toggleMenu}
                    >
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => `${style.link} ${isActive ? style.active : ''}`}
                            >
                                О нас
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/school"
                                className={({ isActive }) => `${style.link} ${isActive ? style.active : ''}`}
                            >
                                Школа Семицветика
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/courses"
                                className={({ isActive }) => `${style.link} ${isActive ? style.active : ''}`}
                            >
                                Курсы испанского языка
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => `${style.link} ${isActive ? style.active : ''}`}
                            >
                                Культурные проекты
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/events"
                                className={({ isActive }) => `${style.link} ${isActive ? style.active : ''}`}
                            >
                                Календарь мероприятий
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => `${style.link} ${isActive ? style.active : ''}`}
                            >
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </div>            
            </nav>
        </header>
    );
};