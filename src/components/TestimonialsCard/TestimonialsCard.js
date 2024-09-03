import './testimonialscard.css'
import StarRating from '../StarRating/StarRating'

const TestimonialsCard = (props) => {
  return (
    <div className='testimonials-card'>
      <div className="testimonials-card__rating">
        <StarRating stars={props.rating}/>
      </div>
      <div className="testimonials-card__profile">
        <div className="testimonials-card__profile-image">
          <img src={props.imageLink} alt="profile"/>
        </div>
        <h4 className='card-title'>{props.name}</h4>
      </div>
      <div className="testimonials-card__review">
        <p>{props.review}</p>
      </div>
    </div>
  )
}

export default TestimonialsCard