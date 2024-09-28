import style from './ButtonFlower.module.css';
import PetalButton from '../PetalButton/PetalButton';

export default function ButtonFlower() {
    return (
        <div className={style.container}>
            <div className={style.central}>
                <PetalButton text={'Logo'}/>
            </div>
            <div className={style.petal} style={{ '--rotation': '0deg'} as React.CSSProperties}>
                <PetalButton text={'О нас'} />
            </div>
            <div className={style.petal} style={{ '--rotation': '60deg'} as React.CSSProperties}>
                <PetalButton text={'Мероприятия'}/>
            </div>
            <div className={style.petal} style={{ '--rotation': '120deg'} as React.CSSProperties}>
                <PetalButton text={'Школа Семицветика'}/>
            </div>
            <div className={style.petal} style={{ '--rotation': '180deg'} as React.CSSProperties}>
                <PetalButton text={'Курсы испанского языка'}/>
            </div>
            <div className={style.petal} style={{ '--rotation': '240deg'} as React.CSSProperties}>
                <PetalButton text={'Контакты'}/>
            </div>
            <div className={style.petal} style={{ '--rotation': '300deg'} as React.CSSProperties}>
                <PetalButton text={''}/>
            </div>
        </div>
    );
};