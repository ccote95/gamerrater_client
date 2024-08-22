import { Card, CardBody } from "reactstrap"

export const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <Card className="w-50 shadow" style={{ background: "grey" }}>
            <CardBody className="text-center fs-1" style={{ color: "white" }}>
                Welcome To Gamer Rater!
            </CardBody>
        </Card>
    </div>
    
    )
}