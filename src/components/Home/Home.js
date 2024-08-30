import './home.css'
import Hero from "../Hero/Hero"
import Highlights from "../Highlights/Highlights"
import Testimonials from "../Testimonials/Testimonials"
import About from "../About/About"

function Home() {
  return (
    <div className='home-section'>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </div>
  );
}

export default Home;
