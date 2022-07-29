import { Button, List, Spin } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { StandardLayout } from '../../layout/StandardLayout'
import { UserContext } from '../../context'
import { EditModal } from '../../components/Profile/EditModal'

export const About: React.FC = () => {
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
        <StandardLayout>
            <div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white min-h-screen'>
                <h1 className="site-layout-background font-sans font-bold text-white text-9xl text-center" style={{ padding: 24, minHeight: 380 }}>
                    Masih mikirin <br /> Kontennya
                </h1>
            </div>
        </StandardLayout>
    )
}
