import style from './Courses.module.css';
import CustomButton from '../../components/CustomButton/CustomButton';
import Footer from '../../components/Footer/Footer';

export default function Courses() {
    return (
        <div className={style.container}>
            <div className={style.topInfo}>
                <h1>Курсы испанского языка</h1>
                <section className={style.schedule}>
                    <h3>РАСПИСАНИЕ ЗАНЯТИЙ:</h3>
                    <p> СРЕДА , ЧЕТВЕРГ</p>
                    <p><b> 19:00 - 20:30 </b></p>
                </section>
            </div>
            <div className={style.content}>
                <h2>🇪🇸 Уровень <b>A2</b> 🇪🇸</h2>
                <p>Занятия по испанскому языку <b>ДЛЯ ВЗРОСЛЫХ</b> с <b>Мерсе</b> и <b>Брендой</b> по средам и четвергам с октября по июнь в Семицветике!</p>
                <div className={style.schoolClases}>
                    <section className={`${style.classData} ${style.left}`}>
                        <h3>El miercoles progresivo:</h3>
                        <ul>
                            <li>Испанский для продолжающих</li>
                            <li>🤓</li>
                            <li>по средам</li>
                        </ul>
                    </section>
                    <section className={`${style.classData} ${style.right}`}>
                        <h3>El jueves inmersivo:</h3>
                        <ul>
                            <li>Испанский с погружением</li>
                            <li>😎</li>
                            <li>по четвергам</li>
                        </ul>
                    </section>
                </div>
                <a href="mailto:semytsvetyk@gmail.com" style={{ textDecoration: 'none', margin: '1.5rem 0' }}>
                    <CustomButton>ЗАПИСАТЬСЯ НА ЗАНЯТИЯ</CustomButton>
                </a>
            </div>
            <Footer />
        </div>
    );
};