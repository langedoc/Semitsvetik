import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

export default function Root() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <>
            {!isHome && <Navbar />}
            <Outlet />
        </>
    );
};