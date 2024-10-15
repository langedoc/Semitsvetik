import style from './EventCard.module.css';
import { EventProps } from '../../types/events.types';

export default function EventCard ({event}: {event: EventProps}) {
    return (
        <div className={style.container}>
            <h2>{event.title}</h2>
            <img src={event.image} alt={event.title} />
        </div>
    );
}