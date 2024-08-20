import React from 'react'
import TestimonialsCard from '../../TestimonialsCard/TestimonialsCard'

const testimonials = [
  {
    name: "Ahmad",
    rating: 5,
    review: "Great food!"
  },
  {
    name: "Joshua",
    rating: 5,
    review: "Quality service."
  },
  {
    name: "Luke",
    rating: 4,
    review: "Top notch"
  },
  {
    name: "Anthony",
    rating: 5,
    review: "Cool cool cool cool."
  },
]

const Testimonials = () => {
  return (
    <div className='testimonials-section'>
      <h1>Testimonials</h1>
      <div className="testimonials-section__content">
        {
          testimonials.map((testimonial) => {
            return (
              <TestimonialsCard
                name={testimonial.name}
                rating={testimonial.rating}
                review={testimonial.review}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Testimonials