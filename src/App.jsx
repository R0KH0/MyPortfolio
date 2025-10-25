import { useState } from 'react'
import NavBar from './components/navBar.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Footer />
    </div>
  )
}

export default App
