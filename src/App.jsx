import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  const [currentLocation, setCurrentLocation] = useState("/")

  return (
    <>
      <nav>
        <button onClick={() => setCurrentLocation("/")} type="button">
          Home
        </button>
        <button onClick={() => setCurrentLocation("/about")} type="button">
          About
        </button>
      </nav>
      <main>
        {currentLocation === "/" && <Home />}
        {currentLocation === "/about" && <About />}
      </main>
    </>
  );
}

export default App
