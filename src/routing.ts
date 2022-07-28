import React, { LazyExoticComponent } from 'react'

const LoginPage: LazyExoticComponent<any> = React.lazy(() => 
    import('./pages/Users/Login').then((module) => ({
        default: module.Login
    }))
)

interface PageRouting {
    path: string;
    component: LazyExoticComponent<any>;
}

export const Routing: PageRouting[] = [
    {
        path: '/login',
        component: LoginPage
    }
]