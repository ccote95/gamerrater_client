import { useEffect } from "react"
import { useState } from "react"
import { FetchAllGames } from "../../Managers/gameManager.js"

export const AllGames = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        FetchAllGames().then(setGames)
    },[])



    return (
        <div>
            {games.map(game => 
                <div key={game.id}>
                    {game.title}
                </div>
            )}
        </div>
    )
}