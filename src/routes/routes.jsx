import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path:'/login',
        element: <Login/>
    }

]);
export default routes;