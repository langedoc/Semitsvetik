import style from './LandingLogo.module.css';
import logo from '../../assets/images/logo.png';

export default function LandingLogo() {
    return (
        <div className={style.container}>
            <div className={style.logoNameContainer}>
                <div className="logoContainer">
                    <img src={logo} className="logo" alt={'logo'}/>
                </div>
                <div className={style.name}>
                    <p>
                        <b>
                            СЕМИ
                        </b>
                        <br/>
                        Цветик
                    </p>
                </div>
            </div>
            <div className={style.description}>
                <p>
                    СЕМЕЙНЫЙ ЦЕНТР
                    <br/>
                    Русского языка и культуры
                </p>
            </div>
        </div>
    );
};