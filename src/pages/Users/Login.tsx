import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Spin } from 'antd'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context'

export const Login: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false)

    const { setUser }: any = useContext(UserContext)

    const navigate = useNavigate()

    const onFinish = (values: any) => {
        // SIMULASI CHECK USER DAN MENAMBAH COOKIES USER
        setLoading(true)
        setTimeout(() => {
            const { username, password } = values
            setUser({
                username,
                password
            })
            navigate('/')
            setLoading(false)
        }, 1000)
    }

    return (
        <Spin tip="Loading . . ." spinning={loading}>
            <Form
                name="login"
                className="max-w-xs"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="float-right" onClick={() => navigate('/recover')}>
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full">
                        Log in
                    </Button>
                    Or <a onClick={() => navigate('/register')}>register now!</a>
                </Form.Item>
            </Form>
        </Spin>
    )
}