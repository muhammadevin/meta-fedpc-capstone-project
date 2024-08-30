import './about.css'
import About1 from '../../assets/about1.jpg'
import About2 from '../../assets/about2.jpg'

const aboutContent = {
  heading: "Little Lemon",
  subTitle: "Chicago",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus iaculis lacus, sed pretium augue malesuada sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n
  Curabitur ac nisi sed est iaculis placerat a sed ante. Suspendisse ut velit at sem pellentesque tristique vel in neque. In quis facilisis quam, in blandit metus.`,
  firstImg: About1,
  secondImg: About2
};

const About = () => {
  return (
    <div className='about-section'>
      <div className="about-section__text">
        <h1 className='display-title'>{aboutContent.heading}</h1>
        <h2 className="sub-title">{aboutContent.subTitle}</h2>
        <p>{aboutContent.description}</p>
      </div>
      <div className="about-section__image">
        <img src={aboutContent.firstImg} alt="About Restaurant" className='about-section__image1'/>
        <img src={aboutContent.secondImg} alt="Chefs" className='about-section__image2'/>
      </div>
    </div>
  )
}

export default About