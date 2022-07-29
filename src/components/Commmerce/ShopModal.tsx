import { Avatar, Button, Card, Modal } from 'antd'
import { useEffect, useState } from 'react'

const { Meta } = Card

interface Props {
    visibleModal: boolean
    selectedData: {
        altImage?: string, 
        srcImage?: string, 
        username?: string,
        title?: string,
        price?: string
    }
    loadingBuy: boolean
    handleBuy: (e: React.MouseEvent<HTMLElement>) => void
    handleCancel: (e: React.MouseEvent<HTMLElement>) => void
}

export const ShopModal: ({}: Props) => JSX.Element = ({
    visibleModal,
    selectedData,
    loadingBuy,
    handleBuy,
    handleCancel
}: Props) => {
    const footer = [
        <Button key="back" onClick={handleCancel}>Cancel</Button>,
        <Button key="submit" type="primary" loading={loadingBuy} onClick={handleBuy}>Buy</Button>
    ]

    return (
        <Modal
            visible={visibleModal}
            title={selectedData.title}
            onOk={handleBuy}
            onCancel={handleCancel}
            footer={footer}
        >
            <Card
                cover={
                    <img 
                        alt={selectedData.altImage}
                        src={selectedData.srcImage}
                    />
                }
            >
                <Meta
                    avatar={<Avatar style={{ verticalAlign: 'middle' }} size="large">{selectedData.username}</Avatar>}
                    title={selectedData.title}
                    description={selectedData.price}
                />
            </Card>
        </Modal>
    )
}