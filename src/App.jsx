import './App.css'
import Experience from "./components/Experience"
import Talk from "./components/Talk"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Portfolio/>
      <Experience/> 
      <Talk/>
    </>
  )
}

export default App
