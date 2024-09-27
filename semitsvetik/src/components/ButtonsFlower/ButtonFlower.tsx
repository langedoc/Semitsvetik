import style from './ButtonFlower.module.css';
import PetalButton from '../PetalButton/PetalButton';

export default function ButtonFlower() {
    return (
        <div className={style.container}>
            <div className={style.central}>
                <PetalButton />
            </div>
            <div className={style.petal} style={{ '--rotation': '0deg'}}>
                <PetalButton />
            </div>
            <div className={style.petal} style={{ '--rotation': '60deg'}}>
                <PetalButton />
            </div>
            <div className={style.petal} style={{ '--rotation': '120deg'}}>
                <PetalButton />
            </div>
            <div className={style.petal} style={{ '--rotation': '180deg'}}>
                <PetalButton />
            </div>
            <div className={style.petal} style={{ '--rotation': '240deg'}}>
                <PetalButton />
            </div>
            <div className={style.petal} style={{ '--rotation': '300deg'}}>
                <PetalButton />
            </div>
        </div>
    );
};