import style from './LandingLogo.module.css';
import logo from '../../assets/logos/logo.png';

export default function LandingLogo() {
    return (
        <div className={style.container}>
            <div className={style.logoNameContainer}>
                <div className={style.logoContainer}>
                    <img src={logo} className={style.logo} alt={'logo'}/>
                </div>
                <div className={style.name}>
                    <p>
                        <b>
                            СЕМИ
                        </b>
                        <br/>
                        ЦВЕТИК
                    </p>
                </div>
            </div>
        </div>
    );
};