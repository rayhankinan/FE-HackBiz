import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Routing } from './routing'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {Routing.map((route) => {
                    const Component = route.component;
                    return (
                        <Route
                            caseSensitive
                            path={route.path}
                            key={route.path}
                            element={<Component />}
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default App
