import { Spin } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StandardLayout } from '../../layout/StandardLayout'

export const Pricing: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false)

    const onFinish = () => {
        // SIMULASI POST DATA
        setLoading(true)
        setTimeout(() => {
            navigate('/')
            setLoading(false)
        }, 1000)
    }

    const navigate = useNavigate()

    return(
        <Spin tip="Loading . . ." spinning={loading}>
            <StandardLayout>
                <div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white min-h-screen'>
                    <h1 className="site-layout-background font-sans font-bold text-white text-8xl text-center" style={{ padding: 40, minHeight: 150 }}>
                        Choose Your Plan
                    </h1>

                    <p className="site-layout-background font-sans font-bold text-white text-4xl text-center" style={{ padding: 0, minHeight: 100 }}>
                        Base On Your Need
                    </p>

                    <div className='flex items-center justify-center h-auto space-x-40'>

                        <div className="shadow-lg rounded-2xl w-64 bg-white p-4">
                            <div className="flex text-black  items-center justify-between">
                                <p className="text-4xl font-medium mb-4">
                                    Free
                                </p>
                                <p className="text-3xl font-bold flex flex-col">
                                    $0
                                    <span className="font-thin text-right text-sm">
                                        year
                                    </span>
                                </p>
                            </div>
                            <p className="text-black text-md mt-4">
                                Plan include :
                            </p>
                            <ul className="text-sm text-black w-full mt-6 mb-6">
                                <li className="mb-3 flex items-center ">
                                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="black" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    All illimited components
                                </li>
                                <li className="mb-3 flex items-center ">
                                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="black" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Own custom Tailwind styles
                                </li>
                                <li className="mb-3 flex items-center ">
                                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="black" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Unlimited Templates
                                </li>
                                <li className="mb-3 flex items-center ">
                                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="black" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Free premium dashboard
                                </li>
                                <li className="mb-3 flex items-center ">
                                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="black" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Best ranking
                                </li>
                                <li className="mb-3 flex items-center opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="black" viewBox="0 0 1792 1792">
                                        <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Prenium svg
                                </li>
                                <li className="mb-3 flex items-center opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="black" viewBox="0 0 1792 1792">
                                        <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    My wife
                                </li>
                            </ul>
                            <button 
                                type="button" 
                                className="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 bg-white hover:bg-gray-100" 
                                onClick={onFinish}
                            >
                                Choose plan
                            </button>
                        </div>

                        <div className="shadow-lg rounded-2xl w-64 bg-green-500 p-4">
                            <div className="flex text-white  items-center justify-between">
                                <p className="text-4xl font-medium mb-4">
                                    Business
                                </p>
                                <p className="text-3xl font-bold flex flex-col">
                                    $99
                                    <span className="font-thin text-right text-sm">
                                        Year
                                    </span>
                                </p>
                            </div>
                            <p className="text-white text-md mt-4">
                                Plan include :
                            </p>
                            <ul className="text-sm text-white w-full mt-6 mb-6">
                                <li className="mb-3 flex items-center ">
                                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    All illimited components
                                </li>
                                <li className="mb-3 flex items-center ">
                                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Own custom Tailwind styles
                                </li>
                                <li className="mb-3 flex items-center ">
                                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Unlimited Templates
                                </li>
                                <li className="mb-3 flex items-center ">
                                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Free premium dashboard
                                </li>
                                <li className="mb-3 flex items-center ">
                                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Best ranking
                                </li>
                                <li className="mb-3 flex items-center opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="white" viewBox="0 0 1792 1792">
                                        <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    Prenium svg
                                </li>
                                <li className="mb-3 flex items-center opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="white" viewBox="0 0 1792 1792">
                                        <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                        </path>
                                    </svg>
                                    My wife
                                </li>
                            </ul>
                            <button 
                                type="button" 
                                className="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 bg-white hover:bg-gray-100" 
                                onClick={onFinish}
                            >
                                Choose plan
                            </button>
                        </div>
                    </div>
                </div>
            </StandardLayout>
        </Spin>
    )
}