import style from './ButtonFlower.module.css';
import PetalButton from '../PetalButton/PetalButton';
import petalData from '../../data/petalData.json';
import logo from '../../assets/logos/logo.png';

export default function ButtonFlower() {
    return (
        <div className={style.container}>
            <div className={style.central}>
                <PetalButton imageSrc={logo}/>
            </div>
            {/* Map through the petalData array dynamically, creating flowers petal buttons */}
            {petalData.map((petal, index) => (
                <div 
                    key={index}
                    className={style.petal}
                    style={{ '--rotation': petal.rotation} as React.CSSProperties}
                >
                    <PetalButton text={petal.text} backgroundColor={petal.backgroundColor} link={petal.link}/>
                </div>
            ))}
        </div>
    );
};