import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { StandardLayout } from '../../../src/layout/StandardLayout'

const { Meta } = Card;

export const Homepage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <StandardLayout>
            <div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white min-h-screen'>
                <h1 className="site-layout-background font-sans font-bold text-white text-9xl text-center" style={{ padding: 24, minHeight: 380 }}>
                    Better Planning <br/> Less Waste
                </h1>

                <div className='flex items-center justify-center h-auto space-x-40'>
                    <Card
                        hoverable
                        onClick={() => navigate('/plan')}
                        className = 'rounded-lg content-center hover:bg-neutral-600 h-60 w-60' 
                        // style={{ width: 240 }}
                        cover={<img className='object-scale-down px-2 py-2 hover:invert' alt="Plan" src="src/resources/blueprint.png" />}
                    >
                        <Meta title="Plan" />
                    </Card>

                    <Card
                        hoverable
                        onClick={() => navigate('/discussion')}
                        className = 'rounded-lg content-center'
                        style={{ width: 240 }}
                        cover={<img alt="Community" src="src/resources/community.png" />}
                    >
                        <Meta title="Community" />
                    </Card>

                    <Card
                        hoverable
                        onClick={() => navigate('/shop')}
                        className = 'rounded-lg content-center'
                        style={{ width: 240 }}
                        cover={<img alt="Buy & Sell" src="src/resources/shop.png" />}
                    >
                        <Meta title="Buy & Sell" />
                    </Card>
                </div>
            </div>
        </StandardLayout>
    )
}