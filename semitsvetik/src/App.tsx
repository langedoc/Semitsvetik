import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root/Root';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import School from './pages/School/School';
import Contact from './pages/Contact/Contact';
import Courses from './pages/Courses/Courses';
import Events from './pages/Events/Events';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/about', element: <About/>},
      {path: '/school', element: <School/>},
      {path: '/contact', element: <Contact/>},
      {path: '/courses', element: <Courses/>},
      {path: '/events', element: <Events/>}
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
