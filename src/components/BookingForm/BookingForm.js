import './bookingform.css'
import {useState} from 'react'
import { validateEmail } from "../utils";
// import { DateInput } from 'rsuite';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button/Button';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '10:00',
    numOfGuests: 1,
    occasion: '',
    firstName: '',
    lastName: '',
    phoneNumber: 0,
    email: '',
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const generateTimeOptions = () => {
    const times = [];
    for (let i = 10; i <= 20; i++) {
      const hour = i.toString().padStart(2, "0");
      times.push(`${hour}:00`);
    }
    return times;
  };

  const [errors, setErrors] = useState({});
  const hasErrors = () => Object.values(errors).some((error) => error);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const getIsFormValid = () => {

  }

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'numOfGuests':
        if (!value) {
          error = 'Please input the number of guests.';
        } else if (value < 1) {
          error = 'Minimum of guests is one person.';
        }
        break;

      case 'firstName':
        if (!value) {
          error = 'First name is required.';
        } else if (value.length < 2) {
          error = 'First name must be at least 2 characters long.';
        }
        break;

      case 'lastName':
        if (!value) {
          error = 'Last name is required.';
        } else if (value.length < 2) {
          error = 'Last name must be at least 2 characters long.';
        }
        break;

      case 'phoneNumber':
        if (!value) {
          error = 'Phone number is required.';
        } else if (value.length < 7) {
          error = 'Phone number must be at least 7 characters long.';
        }
        break;

      case 'email':
        if (!value) {
          error = 'Email is required.';
        } else if (!validateEmail(value)) {
          error = 'Invalid email format.';
        }
        break;

      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Please check your email for confirmation");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='booking-form lead-text'>
      <fieldset>
        <div className="booking-form__field">
          <label>
            Date <sup>*</sup>
          </label>
          {/* <DateInput name='date' value={formData.date} onChange={handleInputChange}/> */}
          <DatePicker
            className='field__date-picker'
            name='date'
            selected={formData.date}
            onChange={(date) => setFormData({...formData, date: date})}
            minDate={today}
            dateFormat="yyyy-MM-dd"
          />
          <div className="booking-form__field-error"></div>
        </div>
        <div className="booking-form__field">
          <label>
            Time <sup>*</sup>
          </label>
          {/* <input name='time' placeholder="--.--" value={formData.time} onChange={handleInputChange}/> */}
          <select
            name='time'
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
            className = 'booking-form__field-time'
          >
            {generateTimeOptions().map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <div className="booking-form__field-error"></div>
        </div>
        <div className="booking-form__field">
          <label>
            Number of guests <sup>*</sup>
          </label>
          <input name='numOfGuests' type="number" min="1" placeholder="Number of guests" value={formData.numOfGuests} onChange={handleInputChange}/>
          <div className="booking-form__field-error">
            {errors.numOfGuests && <p className='paragraph-text' style={{ color: 'red' }}>{errors.numOfGuests}</p>}
          </div>
        </div>
        <div className="booking-form__field">
          <label>
            Occasion
          </label>
          <input name='occasion' placeholder="Ex: Birthday/Anniversary" value={formData.occasion} onChange={handleInputChange}/>
          <div className="booking-form__field-error"></div>
        </div>
        <div className="booking-form__field">
          <label>
            First name <sup>*</sup>
          </label>
          <input name='firstName' placeholder="First name" value={formData.firstName} onChange={handleInputChange}/>
          <div className="booking-form__field-error">
            {errors.firstName && <p className='paragraph-text' style={{ color: 'red' }}>{errors.firstName}</p>}
          </div>
        </div>
        <div className="booking-form__field">
          <label>Last name</label>
          <input name='lastName' placeholder="Last name" value={formData.lastName} onChange={handleInputChange}/>
          <div className="booking-form__field-error">
            {errors.lastName && <p className='paragraph-text' style={{ color: 'red' }}>{errors.lastName}</p>}
          </div>
        </div>
        <div className="booking-form__field">
          <label>
            Phone number <sup>*</sup>
          </label>
          <input name='phoneNumber' type="number" className='field__phone-number' value={formData.phoneNumber} onChange={handleInputChange}/>
          <div className="booking-form__field-error">
            {errors.phoneNumber && <p className='paragraph-text' style={{ color: 'red' }}>{errors.phoneNumber}</p>}
          </div>
        </div>
        <div className="booking-form__field">
          <label>
            Email address <sup>*</sup>
          </label>
          <input name='email' placeholder="Email address" value={formData.email} onChange={handleInputChange}/>
          <div className="booking-form__field-error">
            {errors.email && <p className='paragraph-text' style={{ color: 'red' }}>{errors.email}</p>}
          </div>
        </div>
      </fieldset>
      <Button type="submit" disabled={!hasErrors()}>
        Reserve table
      </Button>
    </form>
  )
}

export default BookingForm