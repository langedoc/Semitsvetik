import style from './Footer.module.css';
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import contacts from '../../data/contactData.json';

export default function Footer() {
    const contact = contacts[0];

    return (
        <footer className={style.container}>
            <div className={style.content}>
                <div className={style.name}>
                    <p>
                        <b>СЕМИ</b>
                        <br/>
                        ЦВЕТИК
                    </p>
                </div>
                <div className={style.contacts}>
                        <p>Контакты:</p>
                        <div className={style.contactItems}>
                            <a href={contact.emailLink}><MdEmail className={style.icon}/></a>
                            <a href={contact.whatsappLink}><IoLogoWhatsapp className={style.icon}/></a>
                            <a href={contact.instaLink}><RiInstagramFill className={style.icon}/></a>
                        </div>
                </div>
            </div>
            <div className={style.copyright}>
                <p>© 2024 Semitsvetik Associacio. All rights reserved. | Website by <a href="https://yuliakapustinaweb.web.app/">YuliaWebDev</a> </p>
            </div>
        </footer>
    );
};