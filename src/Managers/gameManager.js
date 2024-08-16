export const FetchAllGames = async (searchQuery = "", orderBy="") => {
    let url = "http://localhost:8000/games";
        if (searchQuery){
            url += `q=${encodeURIComponent(searchQuery)}`
        }

        if (orderBy){
            url += searchQuery ? `&order_by=${encodeURIComponent(orderBy)}` : `?order_by=${encodeURIComponent(orderBy)}`
        }
    
    const response = await fetch(url, {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`
        }
    });
    
    const games = await response.json();
    return games;
};


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
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(game)
        }
    )
}

export const UpdateGame = async (id, game) => {
    await fetch(`http://localhost:8000/games/${id}`,
        {
            method: "PUT",
            headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(game)
        }
    )
}