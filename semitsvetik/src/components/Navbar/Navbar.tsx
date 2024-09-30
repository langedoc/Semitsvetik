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
                        <Link to="/" className={style.link}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={style.link}>About</Link>
                    </li>
                    <li>
                        <Link to="/school" className={style.link}>School</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};