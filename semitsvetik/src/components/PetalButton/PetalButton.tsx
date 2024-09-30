import style from './PetalButton.module.css';

interface PetalButtonProps {
    text?: string;
    backgroundColor?: string;
    imageSrc?: string;
}

export default function PetalButton({text, backgroundColor, imageSrc}: PetalButtonProps) {
    return (
        <button className={style.petalButton} style={{backgroundColor}}>
            {imageSrc ? (
                <img src={imageSrc} alt={text} className={style.petalImg}/>
            ) : (
                <span>{text}</span>
            )}
        </button>
    )
};