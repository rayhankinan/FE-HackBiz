import { Button, List, Spin } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StandardLayout } from '../../layout/StandardLayout'
import { UserContext } from '../../context'
import { EditModal } from '../../components/Profile/EditModal'

export const Profile: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingEdit, setLoadingEdit] = useState<boolean>(false)
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const [data, setData] = useState<{ title: string, desc: string }[]>([])

    const { user }: any = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            // SIMULASI GET DATA

            const result = [
                {
                    title: 'Email',
                    desc: 'example@example.com'
                },
                {
                    title: 'Username',
                    desc: user.username
                },
                {
                    title: 'Company',
                    desc: 'The Guest Company'
                },
                {
                    title: 'Role',
                    desc: 'Student'
                },
                {
                    title: 'Country',
                    desc: 'Indonesia'
                },
                {
                    title: 'Subscription',
                    desc: 'Free'
                }
            ]

            setData(result)
            setLoading(false)
        }, 1000)
    }, [data])

    return (
        <StandardLayout>
            < div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white min-h-screen'>

                <h4 className="site-layout-background font-sans font-bold text-white text-8xl text-center" style={{ padding: 10, minHeight: 100 }}>
                    <img src="../../../src/resources/guest_user.png" alt="" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                </h4>

                <p className="site-layout-background font-sans font-bold text-white text-4xl text-center" style={{ padding: 0, minHeight: 100 }}>
                    {user.username}
                </p>
                <div className="text-center">
                    <button onClick={() => navigate('./edit')} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Edit profile
                        </span>
                    </button>
                </div>

                <div className='flex items-center justify-center h-auto space-x-40'>

                    <div className="shadow-lg rounded-2xl w-96 bg-white p-4" style={{ height: 730 }}>
                        <div className="flex text-black  items-center justify-between">
                            <p className="text-4xl font-medium mb-4">
                            </p>
                        </div>
                        <p  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Email</h5>
                            <p className="font-normal text-gray-700 ">example@example.com</p>
                        </p>
                        <p  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Name</h5>
                            <p className="font-normal text-gray-700 ">Guest guest</p>
                        </p>
                        <p  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Company</h5>
                            <p className="font-normal text-gray-700 ">The guest company</p>
                        </p>
                        <p  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Role</h5>
                            <p className="font-normal text-gray-700 ">Student</p>
                        </p>
                        <p  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Country</h5>
                            <p className="font-normal text-gray-700 ">Indonesia</p>
                        </p>
                        <p  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Subscription</h5>
                            <p className="font-normal text-gray-700 ">Free</p>
                        </p>
                    </div>
                </div>
            </div>
        </StandardLayout>
    )
    return (
        <StandardLayout >
            {/* Icon profile */}
            <div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white min-h-screen text-white'>
                <div className="flex items-center">
                    <ul className='flex flex-row'>
                        <li>
                            <img src="../../../src/resources/guest_user.png" className="ml-11 mt-10 h-14" alt="Guest User Profile" />
                        </li>
                        <li>
                            <Button
                                size="small"
                                style={{ margin: '0 16px', verticalAlign: 'middle', marginTop: 56, paddingLeft: 7 }}
                                onClick={() => {
                                    setVisibleModal(true)
                                }}
                            >
                                Edit Profile
                            </Button>
                        </li>
                    </ul>
                </div>
                {/* Data profile */}
                <List style={{ paddingLeft: 50, color: 'white' }}
                    className='text-white'
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <span className='text-white'>
                            <List.Item style={{ fontSize: 500 }}>
                                <List.Item.Meta className='text-white'
                                    title={item.title} style={{ fontSize: 500000, color: 'white' }}
                                    description={item.desc}
                                />
                            </List.Item>
                        </span>
                    )}
                />
            </div>
        </StandardLayout>
    )
}