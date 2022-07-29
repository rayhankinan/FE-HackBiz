import { Suspense, useEffect, useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Spin } from 'antd'
import { Routing } from './routing'
import { UserContext } from './context'
import './App.css'

function App() {
    const [loading, setLoading] = useState<boolean>(true)
    const [isLoggedIn, setLoggedIn] = useState<boolean | null>(null)
    const [user, setUser] = useState<any>({})

    useEffect(() => {
        // SIMULASI FETCH BACKEND
        setTimeout(() => {
            setUser({
                username: "rayhankinan",
                password: "Rkm27092002"
            })
            setLoggedIn(true)
            setLoading(false)
        }, 1000)
    }, [isLoggedIn])

    return (
        <Spin tip="Loading . . ." spinning={loading}>
            <UserContext.Provider value={{ user, setUser, setLoggedIn }}>
                <Suspense fallback={<div>Loading . . .</div>}>
                    {isLoggedIn ? <BrowserRouter>
                        <Routes>
                            {Routing.map((route) => {
                                const Component = route.component
                                return (
                                    <Route
                                        caseSensitive
                                        path={route.path}
                                        key={route.path}
                                        element={<Component />}
                                    />
                                )
                            })}
                        </Routes>
                    </BrowserRouter> : null}
                </Suspense>
            </UserContext.Provider>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable={false}
            />
        </Spin>
    )
}

export default App
