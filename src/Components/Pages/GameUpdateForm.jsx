import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Label, Spinner } from "reactstrap"
import { FormGroup, Input } from "reactstrap"
import { FetchSingleGame, UpdateGame } from "../../Managers/gameManager.js"
import { FetchAllCategories } from "../../Managers/categoryManager.js"

export const UpdateForm = () => {
    const [game, setGame ] = useState({})
    const [categories, setCategories] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    const formatDate = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        FetchSingleGame(id).then(fetchedGame => {
            const formattedDate = formatDate(fetchedGame.year_released);
            setGame({...fetchedGame, year_released: formattedDate, categories: fetchedGame.categories.map(c => c.id)});
            
        })
        FetchAllCategories().then(setCategories)
    },[id])

    const handleCategoryChange = (e) => {
        setGame({...game, categories: [parseInt(e.target.value)]})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedGame = {
            title: game.title,
            categories: game.categories, 
            designer: game.designer,
            description: game.description,
            year_released: game.year_released,
            num_of_players: game.num_of_players,
            estimated_play_time: game.estimated_play_time,
            age_recommendation: game.age_recommendation,
        }
        UpdateGame(id,updatedGame).then(() => {
            navigate(`/allgames/${id}`)
        })
    }

    if (!game || !game.categories) return (<Spinner/>)
    return(
        <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Title</Label>
                <Input
                    type="text"
                    value={game.title}
                    onChange={(e) => setGame({...game, title: e.target.value})} />
            </FormGroup>
            <FormGroup>
                <Label>Category</Label>
                <Input
                    type="select"
                    value={game?.categories[0]}
                    onChange={handleCategoryChange}
                     >
                        {categories.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                     </Input>
            </FormGroup>
            <FormGroup>
                <Label>Designer</Label>
                <Input 
                type="text"
                value={game.designer}
                onChange={(e) => setGame({...game, designer: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label>Description</Label>
                <Input
                    type="textarea"
                    value={game.description}
                    onChange={(e) => setGame({...game, description: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label>Year Released</Label>
                <Input
                    type="date"
                    value={game?.year_released || ""} 
                    onChange={(e) => setGame({...game, year_released: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label>Number of Players</Label>
                <Input 
                    type="number"
                    value={game.num_of_players}
                    onChange={(e) => setGame({...game, num_of_players: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label>Estimated Play Time (In hours)</Label>
                <Input 
                    type="number"
                    value={game.estimated_play_time}
                    onChange={(e) => setGame({...game, estimated_play_time: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label>Age Recommendation</Label>
                <Input 
                    type="number"
                    value={game.age_recommendation}
                    onChange={(e) => setGame({...game, age_recommendation: e.target.value})}/>
            </FormGroup>
            <Button type="submit" className="btn-success">Save</Button>
        </Form>
    )
}

export const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`;
}