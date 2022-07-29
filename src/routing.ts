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

const ProfilePage: LazyExoticComponent<any> = React.lazy(() =>
    import('./pages/Profiles/Profile').then((module) => ({
        default: module.Profile
    }))
)

const PricingPage: LazyExoticComponent<any> = React.lazy(() =>
    import('./pages/Pricing/Pricing').then((module) => ({
        default: module.Pricing
    }))
)

const ShopPage: LazyExoticComponent<any> = React.lazy(() =>
    import('./pages/Commerce/Shop').then((module) => ({
        default: module.Shop
    }))
)

const UnderConstructionPage: LazyExoticComponent<any> = React.lazy(() => 
    import('./pages/Templates/UnderConstruction').then((module) => ({
        default: module.UnderConstruction
    }))
)

const ErrorPage: LazyExoticComponent<any> = React.lazy(() => 
    import('./pages/Templates/Error').then((module) => ({
        default: module.Error
    }))
)

const EditPage: LazyExoticComponent<any> = React.lazy(() => 
    import('./pages/Profiles/Edit/Edit').then((module) => ({
        default: module.Edit
    }))
)

interface PageRouting {
    path: string
    component: LazyExoticComponent<any>
}

export const Routing: PageRouting[] = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/profile',
        component: ProfilePage
    },
    {
        path: '/pricing',
        component: PricingPage
    },
    {
        path: '/profile/edit',
        component: EditPage
    },
    {
        path: '/shop',
        component: ShopPage
    },
    {
        path: '/plan',
        component: UnderConstructionPage
    },
    {
        path: '/discussion',
        component: UnderConstructionPage
    },
    {
        path: '/recover',
        component: UnderConstructionPage
    },
    {
        path: '/agreement',
        component: UnderConstructionPage
    },
    {
        path: '/about',
        component: UnderConstructionPage
    },
    {
        path: '/subscription',
        component: UnderConstructionPage
    },
    {
        path: '*',
        component: ErrorPage
    },

]