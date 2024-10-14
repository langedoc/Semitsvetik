import style from './Events.module.css';

export default function Events() {
    return (
        <div className={style.container}>
            <div className={style.topInfo}>
                <h1>Мероприятия</h1>
                <section className={style.schedule}>
                    <h3>БЛИЖАЙШЕЕ:</h3>
                    <p><b>Event title</b></p>
                    <p> day/month/year - <b> time </b></p>
                    <p>place</p>
                </section>
            </div>
            <div className={style.content}>
            </div>
        </div>
    );
};