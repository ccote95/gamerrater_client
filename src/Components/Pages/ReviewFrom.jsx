import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FetchSingleGame } from "../../Managers/gameManager.js"

export const ReviewForm = () => {
    const [review, setReview] = useState("")
    const [game, setGame] = useState([])
    const {gameId} = useParams()

    useEffect(() => {
        FetchSingleGame(gameId).then(setGame)
    },[])
    return(
        <div>
            <div>
                {game.title}
            </div>
            <div>
                <textarea onChange={e => setReview(e.target.value)}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </div>
    )
}