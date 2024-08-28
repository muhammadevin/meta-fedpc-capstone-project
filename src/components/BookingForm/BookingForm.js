import './bookingform.css'
import {useState} from 'react'
import { validateEmail } from "../utils";
import { DateInput } from 'rsuite';
import Button from '../Button/Button';

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

const BookingForm = () => {
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
  });
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Please check your email for confirmation");
  };

  const getIsFormValid = () => {
    return (firstName !== "" &&
            validateEmail(email) &&
            password.value.length >= 8);
  };

  return (
    <form onSubmit={handleSubmit} className='booking-form lead-text'>
      <fieldset>
        <div className="booking-form__field">
          <label>
            Date <sup>*</sup>
          </label>
          <DateInput value={date} onChange={(e) => {setDate(date)}} />
        </div>
        <div className="booking-form__field">
          <label>
            Time <sup>*</sup>
          </label>
          <input placeholder="--.--" value={time} onChange={(e) => {setTime(e.target.value)}}/>
        </div>
        <div className="booking-form__field">
          <label>
            Number of guests <sup>*</sup>
          </label>
          <input type="number" placeholder="1" value={numOfGuests} onChange={(e) => {setNumOfGuests(e.target.value)}}/>
        </div>
        <div className="booking-form__field">
          <label>
            Occasion
          </label>
          <input placeholder="Ex: Birthday/Anniversary" value={occasion} onChange={(e) => {setOccasion(e.target.value)}}/>
        </div>
        <div className="booking-form__field">
          <label>
            First name <sup>*</sup>
          </label>
          <input placeholder="First name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
        </div>
        <div className="booking-form__field">
          <label>Last name</label>
          <input placeholder="Last name" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
        </div>
        <div className="booking-form__field">
          <label>
            Phone number <sup>*</sup>
          </label>
          <input placeholder="xxxxxxxxxx" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
        </div>
        <div className="booking-form__field">
          <label>
            Email address <sup>*</sup>
          </label>
          <input placeholder="Email address" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <div className="booking-form__field">
          <label>
            Password <sup>*</sup>
          </label>
          <input placeholder="Password" value={password.value}
            onChange={(e) => { setPassword({ ...password, value: e.target.value })}}
            onBlur={() => setPassword({ ...password, isTouched: true })}
          />
          {password.isTouched && password.value.length < 8 && (
            <PasswordErrorMessage />
          )}
        </div>
      </fieldset>
      <Button type="submit" disabled={!getIsFormValid()}>
        Reserve table
      </Button>
    </form>
  )
}

export default BookingForm