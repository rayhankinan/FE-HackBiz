import React, { LazyExoticComponent } from 'react'
import { About } from './pages/About/About'

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

const AboutPage: LazyExoticComponent<any> = React.lazy(() =>
    import('./pages/About/About').then((module) => ({
        default: module.About
    }))
)

const DiscussionPage: LazyExoticComponent<any> = React.lazy(() =>
    import('./pages/Forum/Discussion').then((module) => ({
        default: module.Discussion
    }))
)

const PlanPage: LazyExoticComponent<any> = React.lazy(() =>
    import('./pages/Plan/Plan').then((module) => ({
        default: module.Plan
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
        path: '/shop',
        component: ShopPage
    },
    {
        path: '/plan',
        component: PlanPage
    },
    {
        path: '/analyze',
        component: UnderConstructionPage
    },
    {
        path: '/discussion',
        component: DiscussionPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '*',
        component: ErrorPage
    }
]