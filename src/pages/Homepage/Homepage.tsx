import { Button} from 'antd'
import { StandardLayout } from '../../layout/StandardLayout'

export const Homepage: React.FC = () => {
    return (
        <StandardLayout>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                Better Planing Less Waste
            </div>
            <div>
                <Button type="primary">Plan</Button>
                <Button type="primary">Community</Button>
                <Button type="primary">Buy & Sell</Button>
            </div>
        </StandardLayout>
    )
}