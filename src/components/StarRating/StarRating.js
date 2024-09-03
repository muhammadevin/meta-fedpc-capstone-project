import Star from '../../assets/star.svg'
import './starrating.css'

const StarRating = ({ stars }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: stars }, (_, index) => (
        <img key={index} src={Star} alt="star" />
      ))}
    </div>
  );
};

export default StarRating;
