import style from './PetalButton.module.css';

interface PetalButtonProps {
    text: string;
}

export default function PetalButton({text}: PetalButtonProps) {
    return (
        <button className={style.petalButton}>
            <span>{text}</span>
        </button>
    )
};