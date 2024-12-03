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
                    Ассоциация русскоязычных семей <b>"Семицветик"</b> появилась в 2017 году, когда несколько инициативных семей решили создать пространство, где дети могли бы общаться на русском языке, а родители — делиться опытом и находить поддержку.
                    <br/>
                    <br/>
                    В настоящий момент в <b>Школе Семицветика</b> проходят занятия по русскому языку и изобразительному искусству для детей, где они в увлекательной форме получают новые знания и раскрывают свои таланты.
                </p>
                <div className={style.text_photo}>
                    <div className={style.text_image}>
                        <img src={image3} alt="Фото хунты"/>
                        <p>Фото: Elena Derebera</p>
                    </div>
                    <p>
                        Для подростков действует театральная мастерская <b>Art in Heart</b>, дающая пространство для самопознания и творческого самовыражения.
                        <br/>
                        <br/>
                        Для взрослых проходят <b>курсы испанского языка</b>, а также регулярные встречи <b>читательского клуба Книгоцветик</b>.
                    </p>
                </div>
                <div className={style.text_photo}>
                    <p>
                        Помимо этого, мы устраиваем <b>мероприятия для всей семьи</b>. Вместе мы отмечаем Новый год, Масленицу, 8 Марта, Пасху и другие значимые даты, превращая их в тёплые семейные праздники.
                        <br/>
                        <br/>
                        Также, с недавнего времени на базе ассоциации начал свою работу <b>киноклуб</b> с ежемесячными семейными показами на русском языке.
                    </p>
                    <div className={style.text_image}>
                        <img src={image4} alt="Фото хунты"/>
                        <p>Фото: Elena Derebera</p>
                    </div>
                </div>
                <p>
                    Семицветик помогает семьям легче интегрироваться в местное сообщество, сотрудничает с другими организациями города и развивает солидарное направление, где каждый может внести вклад в общее дело.
                    <br/>
                    <br/>
                    Нам очень приятно, что Семицветик стал местом, где люди могут встречаться, расти вместе и находить радость в общении и совместных проектах.
                </p>
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