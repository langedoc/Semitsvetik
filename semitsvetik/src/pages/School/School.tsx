import style from './School.module.css';

export default function School() {
    return (
        <div className={style.container}>
            <h1>Школа Семицветика</h1>
            <div className={style.content}>
                <p>Приглашаем в нашу школу детей от 4 до 12 лет на занятия по следующим направлениям:</p>
                <div className={style.schoolClases}>
                    <div className={`${style.classData} ${style.left}`}>
                        <h3>Русский язык:</h3>
                        <ul>
                            <li>Развитие речи</li>
                            <li>Чтение</li>
                            <li>Письмо</li>
                        </ul>
                    </div>
                    <div className={`${style.classData} ${style.right}`}>
                        <h3>Творческое развитие:</h3>
                        <ul>
                            <li>Изобразительное искусство</li>
                            <li>Элементы театра</li>
                        </ul>
                    </div>
                </div>
                <b>Занятия проходят в небольших группах не больше 8 человек.</b>
                <p>Учиться в Школе Семицветика - это также значит быть частью некоммерческого культурного проекта, призванного создавать пространство для общения, дружбы и роста.</p>
                <p>Для записи на занятия и получения дополнительной информации пишите на почту: <a href="mailto:semytsvetyk@gmail.com">semytsvetyk@gmail.com</a></p>
            </div>
        </div>
    );
};