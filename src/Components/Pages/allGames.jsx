import { useEffect } from "react"
import { useState } from "react"
import { FetchAllGames } from "../../Managers/gameManager.js"
import { Link, useNavigate } from "react-router-dom"
import { Badge, Button, Card, CardTitle, Input, InputGroup } from "reactstrap"


export const AllGames = () => {
    const [games, setGames] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [orderQuery, setOrderQuery] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        FetchAllGames().then(setGames)
    },[])

    const handleSearch = async () => {
        const games = await FetchAllGames(searchQuery, orderQuery)
        setGames(games)
    }

    return (
        <div className="">
            <Button className="btn-success" onClick={() => {navigate("/create")}}>Register A New Game</Button>
            <InputGroup className="d-flex, w-25 shadow" style={{float: "right"}}>
                <Input type="select" className="w-25" onChange={(e) => setOrderQuery(e.target.value)}>
                    <option value="">Order by:</option>
                    <option value="year_released">Year Released</option>
                    <option value="estimated_play_time">Estimated Play TIme</option>
                    <option value="designer">Designer</option>
                </Input>
                <Input 
                    type="text"
                    className="w-25"
                    placeholder="Search for a game"
                    onChange={(e) => setSearchQuery(e.target.value)}/>
                <Button className="btn-success" onClick={() => handleSearch()}>Search</Button>

            </InputGroup>
        <div>
            {games.map(game => 
                <Card key={game.id} className="mt-3 w-50 mx-auto shadow" style={{background: "grey"}}>
                    {game.categories?.map(category =>(
                        <Badge className="ms-2 mt-1 " color="primary" style={{width: "10%",}}>{category.name}</Badge>
                    ))}
                    <Badge className="ms-2 mt-1 " color="info" style={{width: "10%"}}>{game.designer}</Badge>
                    <CardTitle className="mx-auto fs-2" style={{color: "white"}}>
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