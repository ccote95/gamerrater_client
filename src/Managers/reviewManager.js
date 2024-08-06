export const SubmitReview = async (review) => {
    await fetch("http://localhost:8000/reviews",
        {
            method: "POST",
            headers:
            {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`,
                "Content-Type":"application/json"
            },
            body: JSON.stringify(review)
        }
    )
}

export const FetchAllReviewsForGame = async (gameId) => {
    const response = await fetch(`http://localhost:8000/reviews?game=${gameId}`,
        {
            headers: 
            {
                Authorization: `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`
            }
        })
        const reviews = await response.json()
        return reviews
}