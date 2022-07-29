import { ShoppingCartOutlined } from '@ant-design/icons'
import { Avatar, Button, Card, Col, Row, Spin } from 'antd'
import { useEffect, useState } from 'react'
import React from 'react'
import { StandardLayout } from '../../layout/StandardLayout'
import { ShopModal } from '../../components/Commmerce/ShopModal'

const { Meta } = Card

export const Shop: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingBuy, setLoadingBuy] = useState<boolean>(false)
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const [data, setData] = useState<{
        altImage: string,
        srcImage: string,
        username: string,
        title: string,
        price: string
    }[]>([])
    const [selectedData, setSelectedData] = useState<{
        altImage?: string, 
        srcImage?: string, 
        username?: string,
        title?: string,
        price?: string
    }>({})

    useEffect(() => {
        // SIMULASI GET DATA
        setTimeout(() => {
            const result = [
                {
                    altImage: "Wood",
                    srcImage: "https://sc04.alicdn.com/kf/UTB8gXyEqn_IXKJkSalUq6yBzVXar.jpg",
                    username: "rayhankinan",
                    title: "Wood for Sale",
                    price: "Rp. 100,000.00"
                },
                {
                    altImage: "Gypsum",
                    srcImage: "https://image.made-in-china.com/202f0j00jtSRWcGyAKus/Hot-Sale-Drywall-Gypsum-Plasterboard-Professional.jpg",
                    username: "mfikrinurohman",
                    title: "Gypsum for Sale",
                    price: "Rp. 200,000.00"
                },
                {
                    altImage: "Concrete",
                    srcImage: "https://image.made-in-china.com/2f0j00ujmtFEqcbapK/Precast-Concrete-Hollow-Core-Slab-Forming-Making-Machine-for-Sale.jpg",
                    username: "dhiyarisalah",
                    title: "Concrete for Sale",
                    price: "Rp. 300,000.00"
                },
                {
                    altImage: "Gypsum",
                    srcImage: "https://image.made-in-china.com/202f0j00jtSRWcGyAKus/Hot-Sale-Drywall-Gypsum-Plasterboard-Professional.jpg",
                    username: "mfikrinurohman",
                    title: "Gypsum for Sale",
                    price: "Rp. 200,000.00"
                },
                {
                    altImage: "Gypsum",
                    srcImage: "https://image.made-in-china.com/202f0j00jtSRWcGyAKus/Hot-Sale-Drywall-Gypsum-Plasterboard-Professional.jpg",
                    username: "mfikrinurohman",
                    title: "Gypsum for Sale",
                    price: "Rp. 200,000.00"
                },
                {
                    altImage: "Wood",
                    srcImage: "https://sc04.alicdn.com/kf/UTB8gXyEqn_IXKJkSalUq6yBzVXar.jpg",
                    username: "rayhankinan",
                    title: "Wood for Sale",
                    price: "Rp. 100,000.00"
                },
                {
                    altImage: "Gypsum",
                    srcImage: "https://image.made-in-china.com/202f0j00jtSRWcGyAKus/Hot-Sale-Drywall-Gypsum-Plasterboard-Professional.jpg",
                    username: "mfikrinurohman",
                    title: "Gypsum for Sale",
                    price: "Rp. 200,000.00"
                },
                {
                    altImage: "Concrete",
                    srcImage: "https://image.made-in-china.com/2f0j00ujmtFEqcbapK/Precast-Concrete-Hollow-Core-Slab-Forming-Making-Machine-for-Sale.jpg",
                    username: "dhiyarisalah",
                    title: "Concrete for Sale",
                    price: "Rp. 300,000.00"
                }
            ]

            setData(result)
            setLoading(false)
        }, 1000)
    }, [data])

    return (
        <Spin tip="Loading . . ." spinning={loading}>
            <StandardLayout>
                <Row gutter={16}>
                    {data.map((element, index) => {
                        return (
                            <div className='flex items-center justify-center'>
                            <Col span={8} key={index}>
                                <Card
                                    hoverable
                                    className = 'rounded-lg h-fit w-96 my-2'
                                    cover={
                                        <img 
                                            className='h-96 w-96'
                                            alt={element.altImage}
                                            src={element.srcImage}
                                        />
                                    }
                                    actions={[
                                        <Button className='rounded-lg bg-green-600 justify-center' type="primary" onClick={() => {
                                            setVisibleModal(true)
                                            setSelectedData(element)
                                        }}>
                                            <ShoppingCartOutlined />
                                        </Button>
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar style={{ verticalAlign: 'middle' }} size="large">{element.username}</Avatar>}
                                        title={element.title}
                                        description={element.price}
                                    />
                                </Card>
                            </Col>
                            </div>
                        )
                    })}
                </Row>
            </StandardLayout>
            {visibleModal && (
                <ShopModal
                    visibleModal={visibleModal}
                    selectedData={selectedData}
                    loadingBuy={loadingBuy}
                    handleBuy={() => {
                        // SIMULASI POST TRANSAKSI
                        setLoadingBuy(true)
                        setTimeout(() => {
                            setLoadingBuy(false)
                            setVisibleModal(false)
                        }, 1000)
                    }}
                    handleCancel={() => {
                        setVisibleModal(false)
                    }}
                />
            )}
        </Spin>
    )
}