import { createBrowserRouter } from "react-router-dom";
import Main from './../Components/Layout/Main';
import Home from './../Components/Home/Home';
import Course from '../Components/Course/Course'
import AllCourse from './../Components/AllCourse/AllCourse';
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Checkout from "../Components/Checkout/Checkout";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'courses',
                element: <AllCourse></AllCourse>,
                loader: () => fetch('http://localhost:5000/all-course')
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])