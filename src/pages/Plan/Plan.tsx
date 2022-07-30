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
            setLoading(false)
        }, 1000)
    }, [data])

    return (
        <StandardLayout>
            <div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white min-h-screen '>
                {/* <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900"> */}
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-6 py-8 text-white">
                    <p className="flex items-center">
                        <img src="../../../logo_negative.png" className="mr-3 h-12" alt="Flowbite Logo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap ">Plan your own building</span>
                    </p>
                    <p>
                        Plan your building using materials listed as international standards.
                    </p>
                </div>

                <Spin tip="Loading . . ." spinning={loading}>
                    <div className='flex items-center justify-center h-auto space-x-40'>
                    <Form className='text-white w-3/6'
                        {...formItemLayout}
                        name="register"
                        onFinish={onFinish}
                        scrollToFirstError
                    >
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your city</label>
                        <select id="city" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Bandung</option>
                            <option>Jakarta</option>
                            <option>Surabaya</option>
                            <option>Semarang</option>
                        </select>
                        <label htmlFor="size" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select building size</label>
                        <select id="size" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                        </select>
                        <label htmlFor="concrete" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your concrete choice</label>
                        <select id="concrete" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>C7/8</option>
                            <option>C10</option>
                            <option>C20</option>
                            <option>C30</option>
                            <option>C40</option>
                        </select>
                        <label htmlFor="bricks" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your bricks choice</label>
                        <select id="bricks" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Sun-dried bricks</option>
                            <option>Burnt clay bricks</option>
                            <option>Fly ash bricks</option>
                            <option>Concrete bricks</option>
                        </select>
                        <label htmlFor="wood" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your wood choice</label>
                        <select id="wood" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Pine</option>
                            <option>Cedarwood</option>
                            <option>Firwood</option>
                            <option>Spruce</option>
                        </select>
                        <label htmlFor="stone" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your stone choice</label>
                        <select id="stone" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Granite</option>
                            <option>Marble</option>
                            <option>Laterite</option>
                            <option>Quartz</option>
                        </select>
                        <label htmlFor="steel" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your steel choice</label>
                        <select id="steel" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Light gauge</option>
                            <option>Structural steel</option>
                            <option>Mild steel</option>
                            <option>Rebar</option>
                        </select>
                        <label htmlFor="sand" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your sand choice</label>
                        <select id="sand" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Utility sand</option>
                            <option>Fill sand</option>
                            <option>Concrete sand</option>
                            <option>Coarse sand</option>
                        </select>
                
                        <div className="mt-10 ml-90 text-left flex items-center justify-center h-auto space-x-40">
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" className='text-black items-center hover:bg-lime-500'>
                                    Check
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                    </div>
                </Spin>
            </div>

        </StandardLayout>
    )
}