import style from './ProjectCard.module.css';
import { ProjectProps } from '../../types/projects.types';

export default function ProjectCard ({project}: {project: ProjectProps}) {
    return (
        <div className={style.container}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

        </div>
    );
}