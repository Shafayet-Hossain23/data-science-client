import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import History from "../Pages/AboutUs/History/History";
import Goals from "../Pages/AboutUs/Goals/Goals";
import Faculty from "../Pages/AboutUs/Faculty/Faculty";
import Undergraduate from "../Pages/Academic/Undergraduate/Undergraduate";
import Graduate from "../Pages/Academic/Graduate/Graduate";
import TrainingPrograms from "../Pages/Academic/TrainingPrograms/TrainingPrograms";
import Notice from "../Pages/Notice/Notice/Notice";
import Research from "../Pages/Research/Reasearch/Research";
import News from "../Pages/Activities/News/News";
import Upcoming from "../Pages/Activities/Upcoming/Upcoming";
import Contact from "../Pages/Contact/Contact/Contact";
import Head from "../Pages/AboutUs/Faculty/Head";
import Login from "../LogReg/Login";
import Register from "../LogReg/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // aboutus
            {
                path: '/history',
                element: <History></History>
            },
            {
                path: '/goals',
                element: <Goals></Goals>
            },
            {
                path: '/faculty',
                element: <Faculty></Faculty>
            },
            {
                path: '/head',
                element: <Head></Head>
            },
            // Academic
            {
                path: '/undergraduate',
                element: <Undergraduate></Undergraduate>
            },
            {
                path: '/graduate',
                element: <Graduate></Graduate>
            },
            {
                path: '/training_programs',
                element: <TrainingPrograms></TrainingPrograms>
            },
            // notice
            {
                path: '/notice',
                element: <Notice></Notice>
            },
            // research
            {
                path: '/research',
                element: <Research></Research>
            },
            // activities
            {
                path: '/new_and_events',
                element: <News></News>
            },
            {
                path: '/upcoming_events',
                element: <Upcoming></Upcoming>
            },
            // contact
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])