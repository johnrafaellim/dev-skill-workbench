import MainLayout from "../layouts/MainLayout.jsx";
import Home from '../pages/Home';
import About from '../pages/About';

export const appRoutes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            }
        ]
    }
];