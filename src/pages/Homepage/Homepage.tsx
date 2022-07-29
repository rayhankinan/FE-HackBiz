import { Button } from 'antd'
import { StandardLayout } from '../../layout/StandardLayout'

export const Homepage: React.FC = () => {
    return (
        <StandardLayout>
            <div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white '>
                <h1 className="site-layout-background font-sans font-bold text-white text-9xl text-center" style={{ padding: 24, minHeight: 380 }}>
                    Better Planning <br/> Less Waste
                </h1>
                <div>
                    <Button type="primary">Plan</Button>
                    <Button type="primary">Community</Button>
                    <Button type="primary">Buy & Sell</Button>
                </div>
            </div>
        </StandardLayout>
    )
}