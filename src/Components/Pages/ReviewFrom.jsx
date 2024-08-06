import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FetchSingleGame } from "../../Managers/gameManager.js"
import { SubmitReview } from "../../Managers/reviewManager.js"

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
        <div>
            <div>
                {game.title}
            </div>
            <div>
                <textarea onChange={e => setReview(e.target.value)}/>
            </div>
            <div>
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </div>
        </div>
    )
}