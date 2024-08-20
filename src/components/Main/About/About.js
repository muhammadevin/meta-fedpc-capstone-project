import React from 'react'

const aboutContent = {
  heading: "Little Lemon",
  subTitle: "Chicago",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus iaculis lacus, sed pretium augue malesuada sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n
  Curabitur ac nisi sed est iaculis placerat a sed ante. Suspendisse ut velit at sem pellentesque tristique vel in neque. In quis facilisis quam, in blandit metus.`
};

const About = () => {
  return (
    <div className='about-section'>
      <div className="about-section__text">
        <h1 className='display-title'>{aboutContent.heading}</h1>
        <h2 className="sub-title">{aboutContent.subTitle}</h2>
        <p>{aboutContent.description}</p>
      </div>
      <div className="about-section__image"></div>
    </div>
  )
}

export default About