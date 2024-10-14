import style from './Events.module.css';

export default function Events() {
    return (
        <div className={style.container}>
            <h1>Мероприятия</h1>
            <ul>
                <li>Книгоцветик</li>
                <li>Киноцветик</li>
                <li>Театральный цветик</li>
            </ul>
        </div>
    );
};