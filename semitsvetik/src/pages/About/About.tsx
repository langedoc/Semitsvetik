import style from './About.module.css';
import image1 from '../../assets/images/about/about1.jpg';
import image2 from '../../assets/images/about/about2.jpg';
import image3 from '../../assets/images/about/junta_1.jpg';
import image4 from '../../assets/images/about/junta_2.jpg';
import Footer from '../../components/Footer/Footer';

export default function About() {
    return (
        <div className={style.container}>
            <div className={style.topInfo}>
                <h1>О нас</h1>
                <div className={style.image1}>
                    <img src={image2} alt="О нас фото" className={style.image}/>
                </div>
            </div>
            <div className={style.content}>
                <p>
                    Ассоциация русскоязычных семей <b>"Семицветик"</b> была основана в 2018 году группой активных и инициативных мам с целью создания русскоязычной среды для своих детей. Мы стремимся сохранить и развивать родной язык в русскоязычных семьях, создавая пространство для общения, обучения и культурного обмена.
                    Ассоциация "Семицветик" регулярно проводит разнообразные <b>мероприятия</b>, которые объединяют семьи и помогают детям ближе познакомиться с русской культурой и традициями. Мы отмечаем такие важные праздники, как Новый год, Масленица, 8 марта и Пасха, создавая теплую и дружескую атмосферу для наших участников.
                </p>
                <div className={style.text_photo}>
                    <p>
                        Кроме того, для детей мы организуем <b>занятия по русскому языку</b>, которые помогают им развивать навыки общения и поддерживать знание языка. Взрослым членам Ассоциации также предоставляется возможность посещать <b>курсы испанского языка</b>.
                    </p>
                    <div className={style.text_image}>
                        <img src={image3} alt="Фото хунты"/>
                        <p>Фото: Elena Derebera</p>
                    </div>
                </div>
                <div className={style.text_photo}>
                    <div className={style.text_image}>
                        <img src={image4} alt="Фото хунты"/>
                        <p>Фото: Elena Derebera</p>
                    </div>
                    <p>
                        Мы гордимся тем, что "Семицветик" стал местом, где русскоязычные семьи могут сохранять свою культуру, заводить новые знакомства и развиваться вместе.
                    </p>
                </div>
            </div>
            <div>
                <div className={style.image2}>
                    <img src={image1} alt="О нас фото" className={style.image}/>
                </div>
            </div>
            <Footer />
        </div>
    );
};