import { useEffect } from "react"
import { useState } from "react"
import { FetchAllGames } from "../../Managers/gameManager.js"
import { Link, useNavigate } from "react-router-dom"
import { Badge, Button, Card, CardTitle, Input, InputGroup } from "reactstrap"


export const AllGames = () => {
    const [games, setGames] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        FetchAllGames().then(setGames)
    },[])



    return (
        <div>
            <Button className="btn-success" onClick={() => {navigate("/create")}}>Register A New Game</Button>
            <InputGroup className="w-25" style={{float: "right"}}>
                <Input type="text"/>
                <Button>Search</Button>

            </InputGroup>
        <div>
            {games.map(game => 
                <Card key={game.id} className="mt-3 w-50 mx-auto shadow">
                    {game.categories?.map(category =>(
                        <Badge className="ms-2 mt-1 " color="primary" style={{width: "10%",}}>{category.name}</Badge>
                    ))}
                    <Badge className="ms-2 mt-1 " color="info" style={{width: "10%"}}>{game.designer}</Badge>
                    <CardTitle className="mx-auto fs-2">
                        <Link to={`/allgames/${game.id}`} style={{textDecoration: 'none', color: "inherit"}}>
                        {game.title}
                        </Link>
                    </CardTitle>
                </Card>
            )}
        </div>
        </div>
    )
}