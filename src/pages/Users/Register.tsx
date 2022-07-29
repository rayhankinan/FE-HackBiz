import { Button, Cascader, Checkbox, Form, Input, Select, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { Option } = Select

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
    }
}

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 16,
            offset: 8
        }
    }
}

export const Register: React.FC = () => {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)

    const navigate = useNavigate()

    const onFinish = (values: any) => {
        // SIMULASI POST USER
        setLoading(true)
        setTimeout(() => {
            navigate('/login')
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        // SIMULASI GET DATA
        setTimeout(() => {
            const result = {
                locations: [
                    {
                        value: 'indonesia',
                        label: 'Indonesia'
                    },
                    {
                        value: 'malaysia',
                        label: 'Malaysia'
                    },
                    {
                        value: 'thailand',
                        label: 'Thailand'
                    }
                ],
            }

            setData(result)
            setLoading(false)
        }, 1000)
    }, [data])

    return (
        <Spin tip="Loading . . ." spinning={loading}>
            <Form
                {...formItemLayout}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    residence: 'indonesia'
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            }
                        })
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="username"
                    label="Username"
                    tooltip="What do you want others to call you?"
                    rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="residence"
                    label="Residence"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your residence!' },
                    ]}
                >
                    <Cascader options={data.locations} />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input className='w-full' />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: 'Please select gender!' }]}
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        }
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="/agreement" target="_blank">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </Spin>
    )
}