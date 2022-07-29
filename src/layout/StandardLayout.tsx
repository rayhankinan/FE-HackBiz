import { Layout, Menu } from 'antd'
import { useContext } from 'react'
import { userContext } from '../context'

const { Header, Content, Footer } = Layout

interface StandardLayoutProps {
    children?: JSX.Element | JSX.Element[] | string | string[]
}

export const StandardLayout: ({} : StandardLayoutProps) => JSX.Element = ({
    children = undefined
}: StandardLayoutProps) => {
    const { user }: any = useContext(userContext)

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
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
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                { children }
            </Content>
            <Footer style={{ textAlign: 'center' }}>Construct.ly ©2022 Created by asepBalon</Footer>
        </Layout>
    )
}