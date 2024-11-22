import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root/Root';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import School from './pages/School/School';
import Contact from './pages/Contact/Contact';
import Courses from './pages/Courses/Courses';
import Events from './pages/Events/Events';
import Projects from './pages/Projects/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '', element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'school', element: <School/>},
      {path: 'contact', element: <Contact/>},
      {path: 'courses', element: <Courses/>},
      {path: 'events', element: <Events/>},
      {path: 'projects', element: <Projects/>}
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
