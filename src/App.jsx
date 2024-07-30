import { useState } from 'react'
import './App.css'
import { ApplicationViews } from './Components/ApplicationViews.jsx'
import { NavBar } from './Components/Nav.jsx'
import "./Components/Navbar.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ApplicationViews/>
    </>
  )
}

export default App
