import { createBrowserRouter } from "react-router-dom";
import Main from './../Components/Layout/Main';
import Home from './../Components/Home/Home';
import Courses from './../Components/Courses/Courses';
import Course from './../Components/Course/course'


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
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <Course></Course>
            },
            {
                path: '/course/:id',
                element: <Course></Course>
            }
        ]
    }
])