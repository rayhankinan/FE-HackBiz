import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"
import { StandardLayout } from "../../layout/StandardLayout"

export const UnderConstruction: React.FC  = () => {
    const navigate = useNavigate()

    return (
        <StandardLayout>
            <Result
                status="error"
                title="Page under construction"
                extra={
                    <Button type="primary" onClick={() => navigate('../')}>
                        Back
                    </Button>
                }
            />
        </StandardLayout>
    )
}