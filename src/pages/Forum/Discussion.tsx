import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
import { Avatar, Input, List, Space, Spin, Tag, Card } from 'antd'
import type { Moment } from 'moment'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { StandardLayout } from '../../layout/StandardLayout'
import { DiscussionModal } from '../../components/Forum/DiscussionModal'

const { Search } = Input

export const Discussion: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingSearch, setLoadingSearch] = useState<boolean>(false)
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [data, setData] = useState<{
        username: string,
        title: string,
        content: string,
        tag: string[],
        timestamp: Moment,
        star: number,
        like: number,
        comment: number
    }[]>([])
    const [selectedData, setSelectedData] = useState<{
        username?: string,
        title?: string,
        content?: string,
        tag?: string[],
        timestamp?: Moment,
        star?: number,
        like?: number,
        comment?: number
    }>({})

    const onSearch = (value: string) => {
        // SIMULASI SEARCH DATA
        setLoadingSearch(true)
        setTimeout(() => {
            setSearchQuery(value)
            setLoadingSearch(false)
        }, 1000)
    }

    const filteredData = () => {
        return data.filter((element) => {
            return searchQuery === '' || element.tag.includes(searchQuery.toLowerCase())
        })
    }

    const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    )

    useEffect(() => {
        // SIMULASI GET DATA
        setTimeout(() => {
            const result = [
                {
                    username: "rayhankinan",
                    title: "Rasio semen terbaik?",
                    content: "Rasio pasir dan batu yang menghasilkan beton terbaik.",
                    tag: [
                        "rasio",
                        "semen"
                    ],
                    timestamp: moment(1659125275000).subtract(1, 'hour'),
                    star: 10,
                    like: 15,
                    comment: 1
                },
                {
                    username: "vincentius",
                    title: "Cara paling ramah lingkungan dalam recycle beton?",
                    content: "Bagaimana cara terbaik dalam merecycle beton.",
                    tag: [
                        "recycle",
                        "beton"
                    ],
                    timestamp: moment(1659125275000).subtract(2, 'hour'),
                    star: 20,
                    like: 50,
                    comment: 12
                },
                {
                    username: "fikri",
                    title: "Kayu paling kuat?",
                    content: "Saya mau buat rumah 3 lantai, bagusnya pakai kayu apa?",
                    tag: [
                        "rumah",
                        "kayu"
                    ],
                    timestamp: moment(1659125275000).subtract(3, 'hour'),
                    star: 7,
                    like: 4,
                    comment: 3
                },
                {
                    username: "dhiya",
                    title: "Pasir paling murah?",
                    content: "Saya mau buat rumah kecil, pasir paling cocok apa ya?",
                    tag: [
                        "pasir",
                        "rumah kecil"
                    ],
                    timestamp: moment(1659125275000).subtract(0.5, 'hour'),
                    star: 2,
                    like: 1,
                    comment: 0
                },
                {
                    username: "rayhankinan",
                    title: "Beton terkuat?",
                    content: "Saya mau buat mall, apa beton yang cocok?",
                    tag: [
                        "mall",
                        "beton"
                    ],
                    timestamp: moment(1659125275000).subtract(0.3, 'hour'),
                    star: 14,
                    like: 12,
                    comment: 5
                }
            ]

            setLoading(false)
            setData(result)
        }, 1000)
    }, [data])

    return (
        <Spin tip="Loading . . ." spinning={loading}>
            <StandardLayout>
                <div className='grid h-auto place-items-center'>
                <Search 
                    placeholder="Search . . ."
                    loading={loadingSearch}
                    allowClear
                    size="large"
                    onSearch={onSearch}
                    className='w-4/6 my-5'
                />
                <Card
                    className='w-4/6'
                >
                <List 
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        pageSize: 5
                    }}
                    dataSource={filteredData()}
                    renderItem={(item) => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText icon={StarOutlined} text={`${item.star}`} key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text={`${item.like}`} key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text={`${item.comment}`} key="list-vertical-message" />,
                            ]}
                            extra={
                                item.tag.map((message) => (
                                    <Tag>{message}</Tag>
                                ))
                            }
                        >
                            <List.Item.Meta 
                                avatar={<Avatar style={{ verticalAlign: 'middle' }} size="large">{item.username}</Avatar>}
                                title={<a onClick={() => {
                                    setSelectedData(item)
                                    setVisibleModal(true)
                                }}>{item.title}</a>}
                                description={item.timestamp.format('DD MMM YY HH:mm:ss')}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
                </Card>
                </div>
            </StandardLayout>
            {visibleModal && (
                <DiscussionModal 
                    visibleModal={visibleModal}
                    selectedData={selectedData}
                    handleBack={() => {
                        setVisibleModal(false)
                    }}
                />
            )}
        </Spin>
    )
}