import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './PetalButton.module.css';
import { PetalButtonProps } from '../../types/button.types';

export default function PetalButton({text, backgroundColor, imageSrc, link}: PetalButtonProps) {
    // Define a state variable to store the dynamic size (default to '40vh')
    const [size, setSize] = useState('37vh');

    // Function to update the size based on window dimensions
    const updateSize = () => {
        if (window.innerWidth < window.innerHeight) {
            setSize('37vw');
        } else {
            setSize('37vh');
        }
    };

     // useEffect to handle component mounting and resizing events
     useEffect(() => {
        updateSize(); // Set initial size on mount
        window.addEventListener('resize', updateSize); // Add event listener for window resize

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <>
            {link ? (
                <Link to={link} className={style.petalLink}>
                    <button className={style.petalButton} style={{ backgroundColor, width: size, height: size, fontSize: `calc(${size} / 11)` }}>
                        {imageSrc ? (
                            <img src={imageSrc} alt={text} className={style.petalImg}/>
                        ) : (
                            <span>{text}</span>
                        )}
                    </button>
                </Link>
            ) : (
                <button className={style.petalButton} style={{ backgroundColor, width: size, height: size, fontSize: `calc(${size} / 11)` }}>
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