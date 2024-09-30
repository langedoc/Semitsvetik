import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import style from './Root.module.css';

export default function Root() {
    return (
        <>
            <Navbar />
            <main className={style.content}>
                <Outlet />
            </main>
        </>
    );
};