import { Button, Cascader, Checkbox, Form, Input, Select, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StandardLayout } from '../../layout/StandardLayout'

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

export const Plan: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<{ value: string, label: string }[]>([])

    const navigate = useNavigate()

    const onFinish = (values: any) => {
        // SIMULASI POST USER
        setTimeout(() => {
            navigate('/login')
            setLoading(false)
        }, 1000)
    }

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
        <StandardLayout>
            <div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white min-h-screen '>
                {/* <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900"> */}
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-6 py-8 text-white">
                    <p className="flex items-center">
                        <img src="../../src/resources/logo_negative.png" className="mr-3 h-12" alt="Flowbite Logo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap ">Plan your own building</span>
                    </p>
                    <p>
                        Plan your building using materials listed as international standards.
                    </p>
                </div>

                <Spin tip="Loading . . ." spinning={loading}>
                    <Form className='text-white'
                        {...formItemLayout}
                        name="register"
                        onFinish={onFinish}
                        scrollToFirstError
                    >
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your country</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your country</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your country</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your country</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your country</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                        <div className="mt-10 ml-90 text-left">
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" className=''>
                                    Save
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </Spin>
            </div>

        </StandardLayout>
    )
}