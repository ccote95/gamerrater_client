import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./Pages/Login.jsx"
import { Home } from "./Pages/Home.jsx"
import { Authorized } from "./Authorized.jsx"
import { AllGames } from "./Pages/allGames.jsx"
import { Register } from "./Pages/Register.jsx"

export const ApplicationViews= () => {
    


    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Home/>}/>
                <Route path="/allgames" element={<AllGames/>}/>
            
            </Route>
        </Routes>
    )
   
}