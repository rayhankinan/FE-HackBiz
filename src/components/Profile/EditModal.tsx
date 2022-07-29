import { Button, Cascader, Modal, Form, Input, Select, Spin } from 'antd'
import { useEffect, useState } from 'react'

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

interface Props {
    visibleModal: boolean
    loadingEdit: boolean
    handleEdit: (e: React.MouseEvent<HTMLElement>) => void
    handleCancel: (e: React.MouseEvent<HTMLElement>) => void
}

export const EditModal: ({}: Props) => JSX.Element = ({
    visibleModal,
    loadingEdit,
    handleEdit,
    handleCancel
}: Props) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<{value: string, label: string}[]>([])

    const footer = [
        <Button key="back" onClick={handleCancel}>Cancel</Button>,
        <Button key="submit" type="primary" loading={loadingEdit} onClick={handleEdit}>Edit</Button>
    ]

    useEffect(() => {
        // SIMULASI GET DATA
        setTimeout(() => {
            const result = [
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
            ]

            setData(result)
            setLoading(false)
        }, 1000)
    }, [data])

    return (
        <Modal
            visible={visibleModal}
            title="Edit Profile"
            onOk={handleEdit}
            onCancel={handleCancel}
            footer={footer}
        >
            <Spin tip="Loading . . ." spinning={loading}>
            <Form
                {...formItemLayout}
                name="register"
                onFinish={handleEdit}
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
                    <Cascader options={data} placeholder="select your residence" />
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
                    name="company"
                    label="Company"
                    rules={[{ required: true, message: 'Please input your company!' }]}
                >
                    <Input className='w-full' />
                </Form.Item>

                <Form.Item
                    name="role"
                    label="Role"
                    rules={[{ required: true, message: 'Please select role!' }]}
                >
                    <Select placeholder="select your role">
                        <Option value="student">Student</Option>
                        <Option value="business">Business</Option>
                    </Select>
                </Form.Item>
            </Form>
            </Spin>
        </Modal>
    )
}