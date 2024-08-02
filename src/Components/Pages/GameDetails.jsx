import { useEffect, useState } from "react"
import { FetchSingleGame } from "../../Managers/gameManager.js"
import { useParams } from "react-router-dom"

export const GameDetails = () => {
    const [game, setGame] = useState()
    const {id} = useParams()
    useEffect(() => {
        FetchSingleGame(id).then(setGame)
    },[])

    return(
        <div>
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
        </div>
    )
}