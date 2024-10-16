import style from './Contact.module.css';
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import contacts from '../../data/contactData.json';


export default function Contact() {
    const contact = contacts[0];
    
    return (
        <div className={style.container}>
            <div className={style.topInfo}>
                <h1>Контакты</h1>
            </div>
            <div className={style.content}>
                <h3>Как с нами связаться</h3>
                <p> <MdEmail /> По электронной почте: <a href={contact.emailLink}>semytsvetyk@gmail.com</a></p>
                <p><IoLogoWhatsapp /> Наша группа в WhatsApp: <a href={contact.whatsappLink}>присоединиться</a></p>
                <p><RiInstagramFill /> Мы в Instagram: <a href={contact.instaLink}>@semitsvetik.associacio</a></p>
                <p><BiLogoTelegram /> Читательский клуб <b>Книгоцветик</b> в Telegram: <a href={contact.telegramLink}>присоединиться</a></p>
            </div>
        </div>
    );
};