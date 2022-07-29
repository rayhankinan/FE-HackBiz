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
        < div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white min-h-screen'>

            <div className='flex items-center justify-center h-auto space-x-40 pt-56'>
                <div className="shadow-lg rounded-2xl w-96 bg-white p-4" style={{ height: 520 }}>
                    <img src="../../../src/resources/logo.png" alt="" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '40%' }} />
                    <div className=" text-black font-sans text-center">
                        <p className="text-4xl font-medium mt-4 mb-7 ">
                            Log In
                        </p>
                    </div>
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
                                <Button type="primary" htmlType="submit" className="w-full text-black">
                                    Log in
                                </Button>
                                Or <a onClick={() => navigate('/register')}>register now!</a>
                            </Form.Item>
                        </Form>
                    </Spin>
                </div>
            </div>
        </div>
    )
}