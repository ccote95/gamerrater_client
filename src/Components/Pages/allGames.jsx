import { useEffect } from "react"
import { useState } from "react"
import { FetchAllGames } from "../../Managers/gameManager.js"
import { useNavigate } from "react-router-dom"


export const AllGames = () => {
    const [games, setGames] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        FetchAllGames().then(setGames)
    },[])



    return (
        <div>
            <button onClick={() => {navigate("/create")}}>Register A New Game</button>
        <div>
            {games.map(game => 
                <div key={game.id}>
                    <a href={`allgames/${game.id}`}>{game.title}</a>
                </div>
            )}
        </div>
        </div>
    )
}