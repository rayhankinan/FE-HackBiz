import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { StandardLayout } from '../../layout/StandardLayout'

const { Meta } = Card;

export const Homepage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <StandardLayout>
            <div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white min-h-screen'>
                <h1 className="site-layout-background font-sans font-bold text-white text-9xl text-center" style={{ padding: 24, minHeight: 380 }}>
                    Better Planning <br/> Less Waste
                </h1>
                {/* <div>
                    <Button type="primary" onClick={() => navigate('/plan')}>Plan</Button>
                    <Button type="primary" onClick={() => navigate('/discussion')}>Community</Button>
                    <Button type="primary" onClick={() => navigate('/shop')}>Buy & Sell</Button>
                    <Button type="primary" onClick={() => navigate('/profile')}>Profile</Button>
                </div> */}

                <div className='flex items-center justify-center h-auto space-x-40'>
                    <Card
                        hoverable
                        className = 'rounded content-center'
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>

                    <Card
                        hoverable
                        className = 'rounded content-center'
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>

                    <Card
                        hoverable
                        className = 'rounded content-center'
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </div>
            </div>
        </StandardLayout>
    )
}