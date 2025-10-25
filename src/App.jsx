import { useState } from 'react'
import NavBar from './components/navBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
    </div>
  )
}

export default App
