import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { StandardLayout } from '../../layout/StandardLayout'

export const Homepage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <StandardLayout>
            <div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white '>
                <h1 className="site-layout-background font-sans font-bold text-white text-9xl text-center" style={{ padding: 24, minHeight: 380 }}>
                    Better Planning <br/> Less Waste
                </h1>
                <div>
                    <Button type="primary" onClick={() => navigate('/plan')}>Plan</Button>
                    <Button type="primary" onClick={() => navigate('/discussion')}>Community</Button>
                    <Button type="primary" onClick={() => navigate('/shop')}>Buy & Sell</Button>
                    <Button type="primary" onClick={() => navigate('/profile')}>Profile</Button>
                </div>
            </div>
        </StandardLayout>
    )
}