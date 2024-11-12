import style from './LandingLogo.module.css';
import logo from '../../assets/logos/LogoName.png';

export default function LandingLogo() {
    return (
        <div className={style.container}>
            <img src={logo} alt="logo and name" className={style.logoName}/>
        </div>
    );
};