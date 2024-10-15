import style from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../data/projectsData.json';

export default function Projects() {
    return (
        <div className={style.container}>
            <div className={style.topInfo}>
                <h1>Культурные проекты</h1>
            </div>
            <div className={style.content}>
                {projects.map((project, index) =>
                    <ProjectCard key={index} project={project}/>
                )}
            </div>
        </div>
    );
};