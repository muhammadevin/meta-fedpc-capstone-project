import Hero from "./Hero/Hero"
import Highlights from "./Highlights/Highlights"
import Testimonials from "./Testimonials/Testimonials"
import About from "./About/About"
import './main.css'

const Main = () => {
  return (
    <div className="main-section">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </div>
  )
}

export default Main