import style from './Contact.module.css';
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import contacts from '../../data/contactData.json';
import Footer from '../../components/Footer/Footer';

export default function Contact() {
    const contact = contacts[0];
    
    return (
        <div className={style.container}>
            <div className={style.topInfo}>
                <h1>Контакты</h1>
            </div>
            <div className={style.content}>
                <div className={style.contactInfo}>
                    <h3>Как с нами связаться</h3>
                    <p> <MdEmail /> По электронной почте: <a href={contact.emailLink}>semytsvetyk@gmail.com</a></p>
                    <p><IoLogoWhatsapp /> Наша группа в WhatsApp: <a href={contact.whatsappLink}>присоединиться</a></p>
                    <p><RiInstagramFill /> Мы в Instagram: <a href={contact.instaLink}>@semitsvetik.associacio</a></p>
                    <p><BiLogoTelegram /> Читательский клуб <b>Книгоцветик</b> в Telegram: <a href={contact.telegramLink}>присоединиться</a></p>
                </div>
                <div className={style.mapsContent}>
                    <h3>Где проводятся наши мероприятия</h3>
                    <div className={style.mapsContainer}>
                        <div>
                            <p><b>Centre Cívic Creu Alta</b></p>
                            <div className={style.map}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.6256380077475!2d2.099998575674788!3d41.55570227127896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a494e3b849924f%3A0x6309179d3250fec4!2sCarretera%20de%20Prats%20de%20Llu%C3%A7an%C3%A8s%2C%202%2C%2008208%20Sabadell%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1729253768008!5m2!1ses!2ses" width="300" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                            </div>
                            <div className={style.mapInfo}>
                                <p>Все мероприятия, <b>за исключением</b> Киноцветика</p>
                                <p>Carretera de Prats de Lluçanès, 2, 08208 Sabadell, Barcelona</p>
                            </div>
                        </div>
                        <div>
                            <p><b>Киноцветик</b></p>
                            <div className={style.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.6968687765566!2d2.083422575675968!3d41.575804771276516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a495d376aeeb27%3A0xe0bd810a91e7e5bd!2sCarrer%20Portal%20de%20la%20Floresta%2C%2024%2C%2008207%20Sabadell%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1729254108906!5m2!1ses!2ses" width="300" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                            </div>
                            <div className={style.mapInfo}>
                                <p>Carrer Portal de la Floresta, 24, 08207 Sabadell, Barcelona</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};