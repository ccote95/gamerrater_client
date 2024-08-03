import { useEffect, useState } from "react"
import { FetchAllCategories } from "../../Managers/categoryManager.js"
import { SubmitGame } from "../../Managers/gameManager.js"
import { useNavigate } from "react-router-dom"

export const CreateForm = () => {
    const [categories, setCategories] = useState([])
    const [title, setTitle] = useState("")
    const [categoryId, setCategoryId] = useState(0)
    const [designer, setDesigner] = useState("")
    const [yearReleased, setYearReleased] = useState()
    const [numberOfPlayers, setNumberOfPlayers]= useState()
    const [estimatedPlayTime, setEstimatedPlayTime] = useState()
    const [ageRecommendation, setAgeRecommendation] = useState()

    const navigate = useNavigate()
    useEffect(() => {
        FetchAllCategories().then(setCategories)
    },[])

    const createGame = async (e) => {
        e.preventDefault()
        const newGame = {
            title: title,
            categories: categoryId,
            designer: designer,
            year_released: yearReleased,
            num_of_players: numberOfPlayers,
            estimated_play_time: estimatedPlayTime,
            age_recommendation: ageRecommendation
        }
         await SubmitGame(newGame).then(() => {
            navigate("/allgames")
        })
    }


    return(
        <div>
            <form onSubmit={createGame}>
                <fieldset>
                    <label>Game Title</label>
                    <input
                    onChange={e => setTitle(e.target.value)} 
                    type="text"/>
                </fieldset>
                <fieldset>
                    <label>Category</label>
                    <select value={categoryId} 
                    name="categories"
                    onChange={e => setCategoryId(e.target.value)}>
                        <option value={0}>Select a Category</option>
                        {categories.map(c => (
                            <option value={c.id} key={c.id}>{c.name}</option>
                        ))}
                    </select>
                </fieldset>
                <fieldset>
                    <label>Designer</label>
                    <input 
                    onChange={e => setDesigner(e.target.value)}
                    type="text"/>
                </fieldset>
                <fieldset>
                    <label>Year Released</label>
                    <input
                    onChange={e => setYearReleased(e.target.value)} type="date"/>
                </fieldset>
                <fieldset>
                    <label>Number of Players</label>
                    <input
                    onChange={e => setNumberOfPlayers(e.target.value)} type="number"/>
                </fieldset>
                <fieldset>
                    <label>Estimated Play Time(in hours)</label>
                    <input
                    onChange={e => setEstimatedPlayTime(e.target.value)} type="number"/>
                </fieldset>
                <fieldset>
                    <label>Age Recommendation</label>
                    <input
                    onChange={e => setAgeRecommendation(e.target.value)} type="number"/>
                </fieldset>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}