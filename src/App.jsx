import React, { useEffect, useState } from "react"
import Nav from "./components/Nav/Nav"
import Menu from "./components/Menu/Menu"
import Services from "./components/Services/Services"
import Home from "./components/Home/Home"
import Portfolio from "./components/Portfolio/Portfolio"
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact"
import Aos from "aos"
import "aos/dist/aos.css"


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 })
  }, []);
 
  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
