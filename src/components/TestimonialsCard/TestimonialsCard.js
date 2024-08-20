import React from 'react'

const TestimonialsCard = (props) => {
  return (
    <div className='testimonials-card'>
      <div className="testimonials-card__content">
        <div className="testimonials-card__rating">{props.rating}</div>
        <div className="testimonials-card__profile">
          <img src={props.imgSource} alt="profile"/>
          <h4 className='card-title'>{props.name}</h4>
        </div>
        <div className="testimonials-card__review">
          <p>{props.review}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCard