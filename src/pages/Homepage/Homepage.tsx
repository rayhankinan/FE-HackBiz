import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { StandardLayout } from '../../../src/layout/StandardLayout'

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
                        className = 'rounded-lg content-center hover:bg-neutral-800 h-60 w-60' 
                        // style={{ width: 240 }}
                        cover={<img className='object-scale-down px-8 py-8 hover:invert' alt="Plan" src="src/resources/blueprint.png" />}
                    >
                        <h2 className='text-center text-3xl font-sans font-bold'>PLAN</h2>
                    </Card>

                    <Card
                        hoverable
                        onClick={() => navigate('/discussion')}
                        className = 'rounded-lg content-center hover:bg-neutral-800 h-60 w-60' 
                        style={{ width: 240 }}
                        cover={<img className='object-scale-down hover:invert'alt="Community" src="src/resources/community.png" />}
                    >
                        <h2 className='text-center text-3xl font-sans font-bold'>COMMUNITY</h2>
                    </Card>

                    <Card
                        hoverable
                        onClick={() => navigate('/shop')}
                        className = 'rounded-lg content-center hover:bg-neutral-800 h-60 w-60'
                        style={{ width: 240 }}
                        cover={<img className='object-scale-down px-6 py-6 hover:invert' alt="Buy & Sell" src="src/resources/shop.png" />}
                    >
                        <h2 className='text-center text-3xl font-sans font-bold'>BUY & SELL</h2>
                    </Card>
                </div>
            </div>
        </StandardLayout>
    )
}