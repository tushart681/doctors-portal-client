import { createBrowserRouter } from "react-router-dom";
import ManageDoctors from "../../dashboard/ManageDoctors";
import MyAppoinment from "../../dashboard/MyAppoinment";
import Payment from "../../dashboard/Payment";
import AddDoctors from "../appoinment/AddDoctors";
import Appoinment from "../appoinment/Appoinment";
import Home from "../home/Home/Home";
import Login from "../home/Login";
import SignUp from "../home/SignUp";
import AllUsers from "../laouts/AllUsers";
import DashboardLayout from "../laouts/DashboardLayout";
import Main from '../laouts/Main'
import AdminRoutes from "./AdminRoutes";
import DisplayError from "./DisplayError";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        errorElement: <DisplayError />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/signup',
                element: <SignUp />
            },
            {
                path:'/appoinment',
                element: <Appoinment />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment />
            },
            {
                path: '/dashboard/users',
                element: <AdminRoutes><AllUsers /></AdminRoutes>
            },
            {
                path: '/dashboard/addoctor',
                element: <AdminRoutes><AddDoctors /></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoutes><ManageDoctors /></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoutes><Payment /></AdminRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/booking/${params.id}`)
            }
        ]
    }
])
export default router;