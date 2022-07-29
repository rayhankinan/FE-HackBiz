import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"
import { StandardLayout } from "../../layout/StandardLayout"

export const Error: React.FC  = () => {
    const navigate = useNavigate()

    return (
        <StandardLayout>
            <Result
                status="error"
                title="Page not found"
                extra={
                    <Button type="primary" onClick={() => navigate('../')}>
                        Back
                    </Button>
                }
            />
        </StandardLayout>
    )
}