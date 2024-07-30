import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ApplicationViews } from './Components/ApplicationViews.jsx'
import { NavBar } from './Components/Nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
  <ApplicationViews/>
    </>
  )
}

export default App
