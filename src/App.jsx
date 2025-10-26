import { useState } from 'react'
import NavBar from './components/navBar.jsx'
import Home from './components/home.jsx'
import Biography from './components/biography.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <NavBar />
      <Home/>
      <Biography/>
    </div>
  )
}

export default App
