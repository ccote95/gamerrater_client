import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./Pages/Login.jsx"
import { Home } from "./Pages/Home.jsx"

export const ApplicationViews= () => {
    


    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
}