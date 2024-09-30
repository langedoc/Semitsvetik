import { Link } from 'react-router-dom';
import style from './PetalButton.module.css';

interface PetalButtonProps {
    text?: string;
    backgroundColor?: string;
    imageSrc?: string;
    link?: string;
}

export default function PetalButton({text, backgroundColor, imageSrc, link}: PetalButtonProps) {
    return (
        <>
            {link ? (
                <Link to={link} className={style.petalLink}>
                    <button className={style.petalButton} style={{backgroundColor}}>
                        {imageSrc ? (
                            <img src={imageSrc} alt={text} className={style.petalImg}/>
                        ) : (
                            <span>{text}</span>
                        )}
                    </button>
                </Link>
            ) : (
                <button className={style.petalButton} style={{backgroundColor}}>
                        {imageSrc ? (
                            <img src={imageSrc} alt={text} className={style.petalImg}/>
                        ) : (
                            <span>{text}</span>
                        )}
                    </button>
            )}
        </>
    )
};