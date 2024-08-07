import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FetchSingleGame } from "../../Managers/gameManager.js"
import { SubmitReview } from "../../Managers/reviewManager.js"
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle } from "reactstrap"

export const ReviewForm = () => {
    const [review, setReview] = useState("")
    const [game, setGame] = useState([])
    const {gameId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        FetchSingleGame(gameId).then(setGame)
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
       const newReview = {
            review: review,
            game_id: parseInt(gameId)
        }
    await SubmitReview(newReview)
    navigate(`../allgames/${gameId}`)
    }
    return(
        <Card className="w-25 mx-auto">
            <CardTitle className="mx-auto fw-bold fs-4">
                {game.title}
            </CardTitle>
            <CardBody>
                <textarea className="" 
                    style={{width: "100%", height: "100px"}} 
                    placeholder="Leave A Review"
                    onChange={e => setReview(e.target.value)}/>
            </CardBody>
            <CardFooter className="d-flex justify-content-end">
                <Button type= "button" className="btn-success" onClick={(e) => handleSubmit(e)}>Submit</Button>
            </CardFooter>
        </Card>
    )
}