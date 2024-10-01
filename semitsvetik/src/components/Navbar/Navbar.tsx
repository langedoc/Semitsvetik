import {Link} from 'react-router-dom';
import style from './Navbar.module.css';
import logo from '../../assets/images/logo.png';

export default function Navbar() {
    return (
        <header className={style.header}>
            <nav>
                <ul className={style.list}>
                    <li className={style.logoContainer}>
                        <img src={logo} className={style.logo} />
                    </li>
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
            </nav>
        </header>
    );
};