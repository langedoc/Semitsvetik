import style from './ProjectCard.module.css';

export default function ProjectCard () {
    return (
        <div className={style.container}>
            <h2>Project title</h2>
            <img src="https://via.placeholder.com/150" alt="Project title" />
        </div>
    );
}