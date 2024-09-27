import style from './PetalButton.module.css';

export default function PetalButton() {
    return (
        <button className={style.petalButton}>
            <span>Нажми меня</span>
        </button>
    )
};