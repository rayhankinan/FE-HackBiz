import { Avatar, Button, List, Spin } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StandardLayout } from '../../layout/StandardLayout'
import { UserContext } from '../../context'

export const Profile: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
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
    })

    return (
        <Spin tip="Loading . . ." spinning={loading} >
            <StandardLayout >
                {/* Icon profile */}
                <div className="flex items-center">
                    <ul className='flex flex-row'>
                        <li>
                            <img src="../../../src/resources/guest_user.png" className="ml-11 mt-10 h-14" alt="Guest User Profile" />
                        </li>
                        <li>
                            <Button
                                size="small"
                                style={{ margin: '0 16px', verticalAlign: 'middle', marginTop: 56, paddingLeft: 7 }}
                                onClick={() => navigate('./edit')}
                            >
                                Edit Profile
                            </Button>
                        </li>
                    </ul>
                </div>
                {/* Data profile */}
                <List style={{ paddingLeft: 50}}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <span>
                            <List.Item style={{fontSize: 500}}>
                                <List.Item.Meta
                                    title={item.title }
                                    description={item.desc}
                                />
                            </List.Item>
                        </span>
                    )}
                />
            </StandardLayout>
        </Spin>
    )
}