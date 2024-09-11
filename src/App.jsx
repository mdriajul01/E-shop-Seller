import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Components/Navber/Navber'
import Home from './Components/Home/Home'
import Fotter from './Components/Fotter/Fotter'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </>
  )
}

export default App
