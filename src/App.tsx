import { Spin } from 'antd'
import { Suspense, useEffect, useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Routing } from './routing'
import { UserContext } from './context'
import './App.css'

function App() {
    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<{username?: string, password?:string}>({})

    useEffect(() => {
        // SIMULASI CHECK COOKIES USER
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [user])

    return (
        <Spin tip="Loading . . ." spinning={loading}>
            <UserContext.Provider value={{ user, setUser }}>
                <Suspense fallback={<div>Loading . . .</div>}>
                <BrowserRouter>
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
                </BrowserRouter>
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
