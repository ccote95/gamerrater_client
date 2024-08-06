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

export const FetchAllReviews = async () => {
    const response = await fetch("https://localhost:8000/reviews",
        {
            headers: 
            {
                Authorization: `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`
            }
        })
        const reviews = await response.json()
        return reviews
}