import style from './WhatsappLogo.module.css';
import whatsappLogo from '../../assets/logos/whatsappLogo.png';

const whatsappLink="https://chat.whatsapp.com/H1hcs4mxRJqIzzkwlzLIgU";

export default function WhatsappLogo() {
    return (
        <div className={style.container}>
            <a href={whatsappLink}>
                <img src={whatsappLogo} alt="Instagram Logo" className={style.whatsappLogo}/> 
            </a>
      </div>
    );
};