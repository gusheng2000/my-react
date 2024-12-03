import {createBrowserRouter, Navigate} from 'react-router-dom'
import Main from '../pages/main'
import Home from '../pages/home'
import Mall from '../pages/mall'
import User from '../pages/user'
import PageOne from '../pages/other/pageOne'
import PageTwo from '../pages/other/pagetwo'

const routers=[
    {
        path:'/',
        Component: Main,
        children:[
            // 重定向 
            {
                path: '/',
                element: <Navigate to='home' replace/>
            },
            {
                path:'home',
                Component: Home,
            },
            {
                path:'mall',
                Component: Mall,
            },
            {
                path:'user',
                Component: User,
            },
            {
                path:'other',
                default: 'pageOne',
                children:[
                    {
                        path: 'pageOne',
                        Component: PageOne
                    },
                    {
                        path: 'pagetwo',
                        Component: PageTwo
                    }
                ]
            },
        ]
    }
]

export default createBrowserRouter(routers)