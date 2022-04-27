import React,{lazy} from 'react'
import RouteModel from '../models/RouteModel'

const PageNotFound = lazy(() => import('../../ui/page-not-found/PageNotFound'))
const Home = lazy(() => import('../../features/frontend/home'))
const About = lazy(() => import('../../features/frontend/about'))
const Packages = lazy(() => import('../../features/frontend/packages'))
const Tarrif = lazy(() => import('../../features/frontend/tarrif'))
const Contact = lazy(() => import('../../features/frontend/contact'))
const Login = lazy(() => import('../../features/frontend/login/Login'))
const BookCab = lazy(() => import('../../features/frontend/cab'))
const BookingDetails = lazy(() => import('../../features/frontend/cab/BookingDetails'))


const route:RouteModel[] =  [
    {
        path:"",
        component:<Home/>,
        showInMenu:true,
        label:"Home"
    },
    {
        path:"about",
        component:<About/>,
        showInMenu:true,
        label:"About"
    },
    {
        path:"packages",
        component:<Packages/>,
        showInMenu:true,
        label:"Packages"
    },
    {
        path:"tarrif",
        component:<Tarrif/>,
        showInMenu:true,
        label:"Tarrif"
    },
    {
        path:"contact",
        component:<Contact/>,
        showInMenu:true,
        label:"Contact"
    },
    {
        path:"login",
        component:<Login/>,
        showInMenu:true,
        label:"Login"
    },
    {
        path:"booking",
        component:<BookCab/>,
        showInMenu:false,
        label:"Boke a Cab"
    },
    {
        path:"bookingDetails",
        component:<BookingDetails/>,
        showInMenu:false,
        label:"Booking Details"
    },
    {
        path:"*",
        component:<PageNotFound/>,
        showInMenu:false,
        label:"Page Not Found"
    },
]

export default route