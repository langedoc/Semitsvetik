import style from './Events.module.css';
import Footer from "../../components/Footer/Footer";

export default function Events() {
    return (
        <div className={style.container}>
            <div className={style.topInfo}>
                <h1>Календарь мероприятий</h1>
            </div>
            <div className={style.content}>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FMadrid&bgcolor=%23ffd0d0&mode=AGENDA&title=%D0%9A%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8C%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9%20%D0%A1%D0%B5%D0%BC%D0%B8%D1%86%D0%B2%D0%B5%D1%82%D0%B8%D0%BA%D0%B0&src=MzJhMGI4ZGRmZDFjZGEyZmI2NWY5MzBiM2E2MjM5ZjM3N2QzNTE5NDdmNWI5Nzg1ZDJjYjc4OTU1MDUyNzljY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NDhlMWE0NDQ1OWU3ZmQ5ODNjZTY0OWRmMGZmNzdiY2JmZGVlMjQ3NmZlNDc0M2YzMzk4OTBlYmE3MDhhYThjYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Zjc5ZGNmMGIzOGEzMTIzNTMyMDRmZWVjZTI2MTkwN2EyZTc2YjY5N2I3NjE0ODVmZWU0ZDBlOWUyMjExMjlkY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB&color=%23009688&color=%23AD1457" />
            </div>
            <Footer />
        </div>
    );
};