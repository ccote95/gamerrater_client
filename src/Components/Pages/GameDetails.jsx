import { useEffect, useState } from "react"
import { FetchSingleGame } from "../../Managers/gameManager.js"
import { useNavigate, useParams } from "react-router-dom"
import { FetchAllReviewsForGame, RemoveReview } from "../../Managers/reviewManager.js"
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle } from "reactstrap"


export const GameDetails = (currentUser) => {
    const [game, setGame] = useState()
    const [reviews, setReviews] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    const isOwner = game && currentUser && game.ownerId === currentUser.id;


    useEffect(() => {
        FetchSingleGame(id).then(setGame)
        FetchAllReviewsForGame(id).then(setReviews)


    },[])

    return(
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
              Year Released: {game?.year_released}
            </div>
            <div className="fs-4">
              Number of Players: {game?.num_of_players}
            </div>
            <div className="fs-4">
              Estimated Play Time: {game?.estimated_play_time} hours
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
              <h3>Reviews:</h3>
              {reviews?.map(r => (
                <Card className="w-50 shadow mt-4" key={r.id}>
                  <CardHeader>
                    <h4>{r.player.first_name}</h4>
                  </CardHeader>
                  <CardBody>
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
          </CardBody>
        </div>
        {game?.is_owner && (
        <CardFooter>
            <Button onClick={() => navigate(`/allgames/${id}/edit`)}>Update</Button>
        </CardFooter>

        )}
      </Card>
    )
}