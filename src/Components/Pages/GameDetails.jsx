import { useEffect, useState } from "react"
import { FetchSingleGame } from "../../Managers/gameManager.js"
import { useNavigate, useParams } from "react-router-dom"
import { FetchAllReviewsForGame, RemoveReview } from "../../Managers/reviewManager.js"
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Input, Label } from "reactstrap"
import { SubmitRating } from "../../Managers/ratingManager.js"
import { formatDate } from "./GameUpdateForm.jsx"


export const GameDetails = (currentUser) => {
    const [game, setGame] = useState()
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(0)
    const {id} = useParams()
    const navigate = useNavigate()

    const isOwner = game && currentUser && game.ownerId === currentUser.id;


    useEffect(() => {
        FetchSingleGame(id).then(setGame)
        FetchAllReviewsForGame(id).then(setReviews)


    },[id])

    const handleSubmit = async (e) => {
      const newRating = {
        rating: rating,
        game_id: parseInt(id)
      }
      await SubmitRating(newRating)
    }

    return(
      <div>
        <Card className="w-75 mx-auto shadow">
        <CardHeader className="fw-bold fs-2 d-flex">
              <div className="w-25">
                {game?.is_owner == false && (
                  <Button  className="btn-success" onClick={() => navigate(`/games/${id}/review`)}>Leave a Review!</Button>
                )}
              </div>
          <CardTitle className="w-75 d-flex justify-content-start " style={{marginLeft: "300px"}}>
            {game?.title}
          </CardTitle>
        </CardHeader>
        <div className="d-flex">
          <CardBody className="w-50">
            <div className="fs-4">
              Age Recommendation: {game?.age_recommendation}
            </div>
            <div className="fs-4">
              Description: {game?.description}
            </div>
            <div className="fs-4">
              Designer: {game?.designer}
            </div>
            <div className="fs-4">
              Year Released: {formatDate(game?.year_released)}
            </div>
            <div className="fs-4">
              Number of Players: {game?.num_of_players}
            </div>
            <div className="fs-4">
              Estimated Play Time: {game?.estimated_play_time} hours
            </div>
            <div className="fs-4">
              Average Rating: {game?.average_rating}
            </div>
          </CardBody>
          <CardBody className="w-50">
            <div className="fs-3 fw-bold">Categories:</div>
            <ul>
              {game?.categories?.map(category => (
                <li className="fs-4" key={category.id}>
                  {category.name}
                </li>
              ))}
            </ul>
            <div>
            <div>
            <Label className="fs-4 fw-bold">Rate This Game: {rating}</Label>
            <Input name="range"
              type="range"
              value={rating}
              min={1}
              max={10}
              onChange={(e) => setRating(e.target.value)}/>
              <div>
                <Button onClick={(e) => {handleSubmit(e)}} className="btn-success" style={{float: "right"}}>Submit</Button>
              </div>
            </div>
            </div>
          </CardBody>
        </div>
        {game?.is_owner && (
          <CardFooter>
            <Button onClick={() => navigate(`/allgames/${id}/edit`)}>Update</Button>
        </CardFooter>
)}
      </Card>
      <div>
      {reviews?.map(r => (
        <Card className="mx-auto w-50 shadow mt-4" key={r.id}>
          <CardHeader>
            <h4>{r.player.first_name}</h4>
          </CardHeader>
          <CardBody className="fs-2">
            <p>{r.review}</p>
          </CardBody>
          {r.is_owner  && (
            <CardFooter>
              <Button className="btn-danger" 
                onClick={() => {RemoveReview(r.id)}}
                style={{float: "right"}}>
                Delete</Button>
            </CardFooter>

          )}
        </Card>
      ))}
      </div>
</div>
    )
}