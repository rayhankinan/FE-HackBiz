import { Layout, Menu } from 'antd'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context'

const { Header, Content, Footer } = Layout

interface StandardLayoutProps {
    children?: JSX.Element | JSX.Element[] | string | string[]
}

export const StandardLayout: ({} : StandardLayoutProps) => JSX.Element = ({
    children = undefined
}: StandardLayoutProps) => {
    const { user }: any = useContext(UserContext)

    if (!user.username || !user.password) {
        return <Navigate to={"/login"} />
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background:'white' }}>
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    className='text-xl font-sans'
                    items={[
                        {
                            key: 1,
                            label: "Why Construct.ly?"
                        },
                        {
                            key: 2,
                            label: "Products"
                        },
                        {
                            key: 3,
                            label: "Pricings"
                        }
                    ]}
                />
            </Header>
            <Content className="site-layout" style={{ padding: '0', marginTop: 64 }}>
                { children }
            </Content>
            <Footer style={{ textAlign: 'center' }}>Construct.ly ©2022 Created by asepBalon</Footer>
        </Layout>
    )
}