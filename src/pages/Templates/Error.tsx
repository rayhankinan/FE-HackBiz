import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"

export const Error: React.FC  = () => {
    const navigate = useNavigate()

    return (
        <Result
                status="error"
                title="Page not found"
                extra={
                    <Button type="primary" onClick={() => navigate('../')}>
                        Back
                    </Button>
                }
        />
    )
}