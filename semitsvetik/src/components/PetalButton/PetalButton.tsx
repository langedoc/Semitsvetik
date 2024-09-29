import style from './PetalButton.module.css';

interface PetalButtonProps {
    text: string;
    backgroundColor?: string;
}

export default function PetalButton({text, backgroundColor}: PetalButtonProps) {
    return (
        <button className={style.petalButton} style={{backgroundColor}}>
            <span>{text}</span>
        </button>
    )
};