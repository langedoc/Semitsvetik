import style from './ProjectOverlay.module.css';
import { ProjectProps } from '../../types/projects.types';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import { IoMdCloseCircle } from "react-icons/io";

export default function ProjectOverlay({project, onClose}: {project: ProjectProps, onClose: () => void}) {
    return (
        <div className={style.container}>
            <button className={style.closeButton} onClick={onClose}><IoMdCloseCircle /></button>
            <div className={style.overlay}>
                <ProjectDetails project={project}/>
            </div>
        </div>
    );
}