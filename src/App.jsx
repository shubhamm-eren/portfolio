import './App.css'
import Experience from "./components/Experience"
import Talk from "./components/Talk"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import FooterStrip from './components/FooterStrip'


const App = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Portfolio/>
      <Experience/> 
      <Skills/>
      <Talk/>
      <FooterStrip/>
    </>
  )
}

export default App
