import React, { LazyExoticComponent } from 'react'

const LoginPage: LazyExoticComponent<any> = React.lazy(() => 
    import('./pages/Users/Login').then((module) => ({
        default: module.Login
    }))
)

const HomePage: LazyExoticComponent<any> = React.lazy(() => 
    import('./pages/Homepage/Homepage').then((module) => ({
        default: module.Homepage
    }))
)

const RegisterPage: LazyExoticComponent<any> = React.lazy(() =>
    import('./pages/Users/Register').then((module) => ({
        default: module.Register
    }))
)

interface PageRouting {
    path: string
    component: LazyExoticComponent<any>
}

export const Routing: PageRouting[] = [
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/homepage',
        component: HomePage
    },
    {
        path: '/register',
        component: RegisterPage
    }
]