import style from './InstaLogo.module.css';
import instaLogo from '../../assets/logos/instaLogo.png';

const instaLink="https://www.instagram.com/semitsvetik.associacio/"; // Change this to your Instagram link

export default function InstaLogo() {
    return (
        <div className={style.container}>
            <a href={instaLink}>
                <img src={instaLogo} alt="Instagram Logo" className={style.instaLogo}/> 
            </a>
      </div>
    );
};