import React,{lazy} from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookingIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';
import Car from '@mui/icons-material/CarRental';




import RouteModel from '../models/RouteModel'
const PageNotFound = lazy(() => import('../../ui/page-not-found/PageNotFound'))

const Booking = lazy(() => import('../../features/admin/booking/Booking'))
const Dashboard = lazy(() => import('../../features/admin/dashboard/Dashboard'))
const Customer = lazy(() => import('../../features/admin/customer/Customer'))
const User = lazy(() => import('../../features/admin/user/User'))
const Cab = lazy(() => import('../../features/admin/cabs'))
const routes:RouteModel[] = [
    { 
        path:'',
        label:'Dashboard',
        component:<Dashboard/>,
        showInMenu:true,
        role:'admin',
        icon:<DashboardIcon/>
    },
    { 
        path:'/booking',
        label:'Booking',
        component:<Booking/>,
        showInMenu:true,
        role:'admin',
        icon:<BookingIcon/>
    },
    { 
        path:'/customer',
        label:'Customer',
        component:<Customer/>,
        showInMenu:true,
        role:'admin',
        icon:<PeopleIcon/>
    },
    { 
        path:'/user',
        label:'User',
        component:<User/>,
        showInMenu:true,
        role:'admin',
        icon:<PeopleIcon/>
    },
    { 
        path:'/cab',
        label:'Cabs',
        component:<Cab/>,
        showInMenu:true,
        role:'admin',
        icon:<Car/>
    },
    { 
        path:'*',
        label:'Page Not Found',
        component:<PageNotFound/>,
        showInMenu:false,
        role:'all',
    },
]

export default routes