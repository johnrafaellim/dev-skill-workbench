import MainLayout from "../layouts/MainLayout.jsx";
import Home from '../pages/Home';
import About from '../pages/About';
import Login from "../pages/Login.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import Overview from "../pages/expense/Overview.jsx";
import AddExpense from "../pages/expense/AddExpense.jsx";

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
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Overview />,
            },
            {
                path: 'add-expense',
                element: <AddExpense />,
            }
        ]
    },
];