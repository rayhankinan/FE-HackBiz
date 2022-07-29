import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
import { Avatar, Button, Card, Modal, Space } from 'antd'
import type { Moment } from 'moment'
import React from 'react'

const { Meta } = Card

interface Props {
    visibleModal: boolean
    selectedData: {
        username?: string,
        title?: string,
        content?: string,
        tag?: string[],
        timestamp?: Moment,
        star?: number,
        like?: number,
        comment?: number
    },
    handleBack: (e: React.MouseEvent<HTMLElement>) => void
}

export const DiscussionModal: ({}: Props) => JSX.Element = ({
    visibleModal,
    selectedData,
    handleBack
}: Props) => {
    const footer = [
        <Button key="back" onClick={handleBack}>Back</Button>,
    ]

    const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    )

    return (
        <Modal
            visible={visibleModal}
            title={selectedData.title}
            onCancel={handleBack}
            footer={footer}
        >
            <Card
                actions={[
                    <IconText icon={StarOutlined} text={`${selectedData.star}`} key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text={`${selectedData.like}`} key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text={`${selectedData.comment}`} key="list-vertical-message" />,
                ]}
            >
                <Meta 
                    avatar={<Avatar style={{ verticalAlign: 'middle' }} size="large">{selectedData.username}</Avatar>}
                    title={selectedData.title}
                    description={selectedData.timestamp?.format('DD MMM YY HH:mm:ss')}
                />
                <p className="pt-6">{selectedData.content}</p>
            </Card>
        </Modal>
    )
}