import { Button, Form, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StandardLayout } from '../../layout/StandardLayout'

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
    const [data, setData] = useState<{ 
        city?: string[],
        size?: string[],
        concrete?: string[],
        bricks?: string[],
        wood?: string[],
        stone?: string[],
        steel?: string[],
        sand?: string[]
    }>({})

    const navigate = useNavigate()

    const onFinish = (values: any) => {
        // SIMULASI POST USER
        setTimeout(() => {
            navigate('/analyze')
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        // SIMULASI GET DATA
        setTimeout(() => {
            const result = {
                city: [
                    'Bandung',
                    'Jakarta',
                    'Surabaya',
                    'Semarang'
                ],
                size: [
                    'Small',
                    'Medium',
                    'Large',
                    'Extra Large'
                ],
                concrete: [
                    'C7/8',
                    'C10',
                    'C20',
                    'C30',
                    'C40'
                ],
                bricks: [
                    'Sun-dried bricks',
                    'Burnt clay bricks',
                    'Fly ash bricks',
                    'Concrete bricks'
                ],
                wood: [
                    'Pine',
                    'Cedarwood',
                    'Firwood',
                    'Spruce'
                ],
                stone: [
                    'Granite',
                    'Marble',
                    'Laterite',
                    'Quartz'
                ],
                steel: [
                    'Light gauge',
                    'Structural steel',
                    'Mild steel',
                    'Rebar'
                ],
                sand: [
                    'Utility sand',
                    'Fill sand',
                    'Concrete sand',
                    'Coarse sand'
                ]
            }

            setLoading(false)
            setData(result)
        }, 1000)
    }, [data])

    return (
        <Spin tip="Loading . . ." spinning={loading}>
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

                    
                    <div className='flex items-center justify-center h-auto space-x-40'>
                        <Form className='text-white w-3/6'
                            {...formItemLayout}
                            name="register"
                            onFinish={onFinish}
                            scrollToFirstError
                        >
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your city</label>
                            <select id="city" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {data.city?.map((city) => {
                                    return <option>{city}</option>
                                })}
                            </select>
                            <label htmlFor="size" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select building size</label>
                            <select id="size" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {data.size?.map((size) => {
                                    return <option>{size}</option>
                                })}
                            </select>
                            <label htmlFor="concrete" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your concrete choice</label>
                            <select id="concrete" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {data.concrete?.map((concrete) => {
                                    return <option>{concrete}</option>
                                })}
                            </select>
                            <label htmlFor="bricks" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your bricks choice</label>
                            <select id="bricks" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {data.bricks?.map((bricks) => {
                                    return <option>{bricks}</option>
                                })}
                            </select>
                            <label htmlFor="wood" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your wood choice</label>
                            <select id="wood" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {data.wood?.map((wood) => {
                                    return <option>{wood}</option>
                                })}
                            </select>
                            <label htmlFor="stone" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your stone choice</label>
                            <select id="stone" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {data.stone?.map((stone) => {
                                    return <option>{stone}</option>
                                })}
                            </select>
                            <label htmlFor="steel" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your steel choice</label>
                            <select id="steel" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {data.steel?.map((steel) => {
                                    return <option>{steel}</option>
                                })}
                            </select>
                            <label htmlFor="sand" className="block mb-2 text-sm font-medium text-amber-200 pt-7">Select your sand choice</label>
                            <select id="sand" className="bg-gray-400 border border-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {data.sand?.map((sand) => {
                                    return <option>{sand}</option>
                                })}
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
                </div>

            </StandardLayout>
        </Spin>
    )
}