import style from './ProjectDetails.module.css';
import { useState } from 'react';
import { ProjectProps } from '../../types/projects.types';
import { BiLogoTelegram } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCopy } from "react-icons/fa";

export default function ProjectDetails({project}: {project: ProjectProps}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (project.contacts) {
            navigator.clipboard.writeText(project.contacts);
        }
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    return (
        <div className={style.container}>
            <h2>{project.title}</h2>
            <p>{project.longDescription}</p>            
            {project.place && (
                <div>
                    <h3>Место проведения:</h3>
                    <p>{project.place}</p><br/>
                    <SiGooglemaps /><br/>
                    <a href={project.placeLink} target="_blank" rel="noreferrer">
                        Посмотреть на карте
                    </a>
                </div>
            )}
            {project.contacts && (
                <div>
                    <h3>Для записи отправить сообщение:</h3><br/>
                    <IoLogoWhatsapp />
                    <p>{project.contacts}</p>
                    <button onClick={handleCopy}>
                        <FaCopy />
                    </button>
                    {copied && <p>Скопировано!</p>}
                </div>
            )}
            {project.infoLink && (
                <div>
                    <h3>Более подробная информация:</h3><br/>
                    <BiLogoTelegram /><br/>
                    <a href={project.infoLink}
                        target="_blank"
                        rel="noreferrer">
                        в Телеграм-канале
                    </a>
                </div>
            )}
        </div>
    );
};