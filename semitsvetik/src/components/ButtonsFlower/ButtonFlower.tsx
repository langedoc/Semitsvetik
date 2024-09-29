import style from './ButtonFlower.module.css';
import PetalButton from '../PetalButton/PetalButton';
import petalData from '../../data/petalData.json';

export default function ButtonFlower() {
    return (
        <div className={style.container}>
            <div className={style.central}>
                <PetalButton text={'Logo'}/>
            </div>
            {/* Map through the petalData array dynamically, creating flowers petal buttons */}
            {petalData.map((petal, index) => (
                <div 
                    key={index}
                    className={style.petal}
                    style={{ '--rotation': petal.rotation} as React.CSSProperties}
                >
                    <PetalButton text={petal.text} backgroundColor={petal.backgroundColor}/>
                </div>
            ))}
        </div>
    );
};