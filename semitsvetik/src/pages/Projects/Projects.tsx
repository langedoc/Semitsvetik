import style from './Projects.module.css';

export default function Projects() {
    return (
        <div className={style.container}>
            <div className={style.topInfo}>
                <h1>Культурные проекты</h1>
            </div>
            <div className={style.content}>
                <h2>Наши проекты</h2>
            </div>
        </div>
    );
};