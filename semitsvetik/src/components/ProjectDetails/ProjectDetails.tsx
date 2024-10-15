import style from './ProjectDetails.module.css';
import { ProjectProps } from '../../types/projects.types';

export default function ProjectDetails({project}: {project: ProjectProps}) {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2>{project.title}</h2>
            </div>
            <div className={style.description}>
                <p>{project.longDescription}</p>
            </div>
            <div>
                {project.place && (
                    <div>
                        <h3>Место проведения:</h3>
                        <p>{project.place}</p>
                        <a href={project.placeLink} target="_blank" rel="noreferrer">Посмотреть на карте</a>
                    </div>
                )}
                {project.contacts && (
                    <div>
                        <h3>Для записи писать:</h3>
                        <p>{project.contacts}</p>
                    </div>
                )}
                {project.infoLink && (
                    <div>
                        <h3>Более подробная информация:</h3>
                        <a href={project.infoLink}
                            target="_blank"
                            rel="noreferrer">в Телеграм-канале</a>
                    </div>
                )}
            </div>
        </div>
    );
};