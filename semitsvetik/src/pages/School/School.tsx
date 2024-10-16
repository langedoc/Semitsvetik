import style from './School.module.css';
import CustomButton from '../../components/CustomButton/CustomButton';
import Footer from '../../components/Footer/Footer';

export default function School() {
    return (
        <div className={style.container}>
            <div className={style.topInfo}>
                <h1>Школа Семицветика</h1>
                <section className={style.schedule}>
                    <h3>РАСПИСАНИЕ ЗАНЯТИЙ:</h3>
                    <p> ПЯТНИЦА</p>
                    <p><b> 17:30 - 19:30 </b></p>
                </section>
            </div>
            <div className={style.content}>
                <p>Приглашаем в нашу школу детей <b> от 4 до 12 лет </b> на занятия по следующим направлениям:</p>
                <div className={style.schoolClases}>
                    <section className={`${style.classData} ${style.left}`}>
                        <h3>Русский язык:</h3>
                        <ul>
                            <li>🎤 Развитие речи 🎤</li>
                            <li>📖 Чтение 📖</li>
                            <li>✏️ Письмо ✏️</li>
                        </ul>
                    </section>
                    <section className={`${style.classData} ${style.right}`}>
                        <h3>Творческое развитие:</h3>
                        <ul>
                            <li>🎨 Изобразительное искусство 🎨</li>
                            <li>🎭 Элементы театра 🎭</li>
                        </ul>
                    </section>
                </div>
                <p><b>Занятия проходят в небольших группах.</b></p>
                <p>Учиться в Школе Семицветика - это также значит быть частью некоммерческого культурного проекта, призванного создавать пространство для общения, дружбы и роста.</p>
                <a href="mailto:semytsvetyk@gmail.com" style={{ textDecoration: 'none', margin: '1.5rem 0' }}>
                    <CustomButton>ЗАПИСАТЬСЯ НА ЗАНЯТИЯ</CustomButton>
                </a>
            </div>
            <Footer />
        </div>
    );
};