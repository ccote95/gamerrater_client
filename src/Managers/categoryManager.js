export const FetchAllCategories = async () => {
    const response = await fetch("http://localhost:8000/categories", 
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`
            }
        })
        const categories = await response.json()
        return categories
}