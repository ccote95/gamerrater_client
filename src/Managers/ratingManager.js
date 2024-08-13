export const SubmitRating = async (gameId, rating) => {
    const response = await fetch(`http://localhost:8000/ratings?game=${gameId}`,
        {
            method: "POST",
            headers: 
            {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`,
                "Content-Type":"application/json"
            },
            body: JSON.stringify(rating)
        }
    )
}