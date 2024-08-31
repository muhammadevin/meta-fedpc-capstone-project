import './bookingpage.css'
import BookingForm from '../BookingForm/BookingForm'

const BookingPage = (props) => {
  return (
    <div className='booking-page'>
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm}/>
    </div>
  )
}

export default BookingPage