import style from './Events.module.css';
import Footer from "../../components/Footer/Footer";

export default function Events() {
    return (
        <div className={style.container}>
            <div className={style.topInfo}>
                <h1>Календарь мероприятий</h1>
            </div>
            <div className={style.content}>
                <p>Страница в разработке</p>
                <p>Coming soon...</p>
            </div>
            <Footer />
        </div>
    );
};