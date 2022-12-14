import { Button, List, Spin, Avatar } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { StandardLayout } from '../../layout/StandardLayout'
import { UserContext } from '../../context'
import { EditModal } from '../../components/Profile/EditModal'
import autoprefixer from 'autoprefixer'

export const Profile: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingEdit, setLoadingEdit] = useState<boolean>(false)
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const [data, setData] = useState<{ title: string, desc: string }[]>([])

    const { user }: any = useContext(UserContext)

    useEffect(() => {
        setTimeout(() => {
            // SIMULASI GET DATA
            setLoading(false)
        }, 1000)
    }, [data])

    return (
        <Spin tip="Loading . . ." spinning={loading}>
            <StandardLayout>
                <div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white min-h-screen'>
                    <h4 className="site-layout-background font-sans font-bold text-white text-8xl text-center" style={{ padding: 10, minHeight: 100 }}>
                        <Avatar className='text-5xl pt-6' style={{ textAlign:'center', width:100, height:100, display:'block', marginLeft:'auto', marginRight:'auto', backgroundColor: '#00A9EF', verticalAlign: 'middle', marginTop:10}} size="large">{(user.username.charAt(0))}</Avatar>
                    </h4>
                    <p className="site-layout-background font-sans font-bold text-white text-4xl text-center " style={{ minHeight: 100 }}>
                        {user.username}
                    </p>
                    <div className="text-center">
                        <button onClick={() => setVisibleModal(true)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Edit profile
                            </span>
                        </button>
                    </div>

                    <div className='flex items-center justify-center h-auto space-x-40 py-6'>
                        <div className="shadow-lg rounded-2xl w-96 bg-white p-4" style={{ height: 730 }}>
                            <div className="flex text-black  items-center justify-between">
                                <p className="text-4xl font-medium mb-4"></p>
                            </div>
                            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Email</h5>
                                <p className="font-normal text-gray-700 ">example@example.com</p>
                            </div>
                            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Name</h5>
                                <p className="font-normal text-gray-700 ">Guest guest</p>
                            </div>
                            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Company</h5>
                                <p className="font-normal text-gray-700 ">The guest company</p>
                            </div>
                            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Role</h5>
                                <p className="font-normal text-gray-700 ">Student</p>
                            </div>
                            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Country</h5>
                                <p className="font-normal text-gray-700 ">Indonesia</p>
                            </div>
                            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Subscription</h5>
                                <p className="font-normal text-gray-700 ">Free</p>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardLayout>
            {visibleModal && (
                <EditModal
                    visibleModal={visibleModal}
                    loadingEdit={loadingEdit}
                    handleEdit={() => {
                        // SIMULASI PUT PROFILE
                        setLoadingEdit(true)
                        setTimeout(() => {
                            setLoadingEdit(false)
                            setVisibleModal(false)
                        }, 1000)
                    }}
                    handleCancel={() => {
                        setVisibleModal(false)
                    }}
                />
            )}
        </Spin>
    )
}