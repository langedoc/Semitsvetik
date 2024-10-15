import { useState } from 'react';
import style from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../data/projectsData.json';
import ProjectOverlay from '../../components/ProjectOverlay/ProjectOverlay';


export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleClick = (project) => {
        setSelectedProject(project);
    };

    const handleOverlayClose = () => {
        setSelectedProject(null);
    };

    return (
        <div className={style.container}>
            <div className={style.topInfo}>
                <h1>Культурные проекты</h1>
            </div>
            <div className={style.content}>
                {projects.map((project, index) =>
                    <ProjectCard
                        key={index}
                        project={project}
                        onClick={() => handleClick(project)}
                    />
                )}
            </div>

            {selectedProject && (
                <ProjectOverlay
                    project={selectedProject}
                    onClose={handleOverlayClose}
                />
            )}
        </div>
    );
};