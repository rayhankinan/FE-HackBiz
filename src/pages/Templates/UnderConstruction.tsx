import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"

export const UnderConstruction: React.FC  = () => {
    const navigate = useNavigate()

    return (
        <Result
            status="error"
            title="Page under construction"
            extra={
                <Button type="primary" onClick={() => navigate('../')}>
                    Back
                </Button>
            }
        />
    )
}