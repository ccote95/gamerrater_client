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

export const FetchSingleGame = async (id) => {
    const response = await fetch(`http://localhost:8000/games/${id}`,{
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`
        }
    })
    const game = await response.json()
    return game
}

export const SubmitGame = async (game) => {
    await fetch("http://localhost:8000/games",
        {
            method: "POST",
            headers: {
                "Authorization": `Token${JSON.parse(localStorage.getItem("rock_token")).token}`
            },
            body: JSON.stringify(game)
        }
    )
}