import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./Pages/Login.jsx"
import { Home } from "./Pages/Home.jsx"
import { Authorized } from "./Authorized.jsx"

export const ApplicationViews= () => {
    


    return (
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route element={<Authorized />}>
                <Route path="/" element={<Home/>}/>
            
            </Route>
        </Routes>
    )
   
}