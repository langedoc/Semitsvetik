import style from './ProjectCard.module.css';
import { ProjectProps } from '../../types/projects.types';
import CustomButton from '../CustomButton/CustomButton';
import { getImageUrl } from '../../utils/dynamicImgLoader';

export default function ProjectCard ({project, onClick}: {project: ProjectProps, onClick: () => void}) {
    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <img src={getImageUrl(project.imageSrc)} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <CustomButton children={"Подробнее"} className={"customButton"} onClick={onClick}/>
        </div>
    );
}