import Button from '../../Button/Button';
import './hero.css'
import HeroImage from '../../../assets/restauranfood.jpg'

const heroContent = {
  heading: "Little Lemon",
  subTitle: "Chicago",
  description: "We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
};

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-content__text">
          <h1 className="display-title">{heroContent.heading}</h1>
          <h2 className="sub-title">{heroContent.subTitle}</h2>
          <p>{heroContent.description}</p>
          <Button>Reserve a table</Button>
        </div>
        <div className="hero-content__image">
          <img src={HeroImage} alt='hero-image'/>
        </div>
      </div>
    </div>
  )
}

export default Hero