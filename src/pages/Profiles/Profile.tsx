import { Avatar, Button, List, Spin } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StandardLayout } from '../../layout/StandardLayout'
import { UserContext } from '../../context'

export const Profile: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<{title: string, desc: string}[]>([])

    const { user }: any = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            const result = [
                {
                    title: 'Email',
                    desc: 'guest@example.com'
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
        })
    })

    return (
        <Spin tip="Loading . . ." spinning={loading}>
            <StandardLayout>
                {/* Icon profile */}
                <Avatar style={{ verticalAlign: 'middle' }} size="large">
                    {user.username}
                </Avatar>
                <Button
                    size="small"
                    style={{ margin: '0 16px', verticalAlign: 'middle' }}
                    onClick={() => navigate('./edit')}
                >
                    Edit Profile
                </Button>

                {/* Data profile */}
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <span>
                            <List.Item>
                                <List.Item.Meta
                                    title={item.title}
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