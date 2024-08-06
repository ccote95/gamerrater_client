import { useEffect, useState } from "react"
import { FetchSingleGame } from "../../Managers/gameManager.js"
import { useNavigate, useParams } from "react-router-dom"
import { FetchAllReviewsForGame } from "../../Managers/reviewManager.js"

export const GameDetails = () => {
    const [game, setGame] = useState()
    const [reviews, setReviews] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        FetchSingleGame(id).then(setGame)
        FetchAllReviewsForGame(id).then(setReviews)
    },[])

    return(
        <div>
            <div>
                <button onClick={() => navigate(`/games/${id}(/d+)/review`)}>Leave a Review!</button>
            </div>
            <div>
            Game Title: {game?.title}
            </div>
            <div>
            Age Recommendation: {game?.age_recommendation}
            </div>
            <div>
            Description: {game?.description}
            </div>
            <div>
                Designer: {game?.designer}
            </div>
            <div>
                Year Released: {game?.year_released}
            </div>
            <div>
                Number of Players: {game?.num_of_players}
            </div>
            <div>
                Estimated Play Time: {game?.estimated_play_time}
            </div>
            <h2>Categories:</h2>
            <ul>
                {game?.categories.map(category => (
                    <li key={category.id}>
                        {category.name}
                    </li>
                ))}
            </ul>
            <div>
                <h3>Reviews:</h3>
                {reviews?.map(r => (
                    <div>
                        <div>
                            <h4>{r.player.first_name}</h4>
                        </div>
                        <div>
                            <p>{r.review}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}