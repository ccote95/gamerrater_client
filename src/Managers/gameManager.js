export const FetchAllGames = async () => {
    const response = await fetch("http://localhost:8000/games",
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`
            }
        })
    const games = await response.json()
    return games
}