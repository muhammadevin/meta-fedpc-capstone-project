import './testimonials.css'
import TestimonialsCard from '../../TestimonialsCard/TestimonialsCard'

const testimonials = [
  {
    name: "Ahmad",
    rating: 5,
    review: "Great food!",
    imageLink: "https://storage.nu.or.id/storage/post/1_1/mid/1481283354584a971ae27d4.png"
  },
  {
    name: "Joshua",
    rating: 5,
    review: "Quality service.",
    imageLink: "https://cdn.theathletic.com/cdn-cgi/image/width=1200,height=1200,fit=cover/app/uploads/2024/06/18093614/GettyImages-2152327973-scaled-e1718729659904.jpg"
  },
  {
    name: "Luke",
    rating: 4,
    review: "Top notch",
    imageLink: "https://uproxx.com/wp-content/uploads/2021/02/modern-family-1.jpg?w=1024"
  },
  {
    name: "Anthony",
    rating: 5,
    review: "+1000 aura",
    imageLink: "https://akcdn.detik.net.id/community/media/visual/2024/05/15/antony_43.png?w=400&q=90"
  },
]

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
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
                  imageLink={testimonial.imageLink}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Testimonials