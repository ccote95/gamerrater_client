import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./Pages/Login.jsx"
import { Home } from "./Pages/Home.jsx"
import { Authorized } from "./Authorized.jsx"
import { AllGames } from "./Pages/allGames.jsx"
import { Register } from "./Pages/Register.jsx"
import { GameDetails } from "./Pages/GameDetails.jsx"
import { CreateForm } from "./Pages/CreateForm.jsx"
import { ReviewForm } from "./Pages/ReviewFrom.jsx"

export const ApplicationViews= () => {
    


    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Home/>}/>
                    <Route path="/allgames">
                        <Route index  element={<AllGames/>}/>
                        <Route path=":id">
                            <Route index element={<GameDetails/>}/>
                        </Route>
                    </Route>
                    <Route path="/create" element={<CreateForm/>}/>
                    <Route path="/games/:gameId/review" element={<ReviewForm/>}/>
                    
            </Route>
        </Routes>
    )
   
}