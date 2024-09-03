import './bookingform.css'
import {useState} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button/Button';
import * as Yup from 'yup';

const BookingForm = (props) => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '',
    numOfGuests: 1,
    occasion: '',
    firstName: '',
    lastName: '',
    phoneNumber: 0,
    email: '',
  });

  const validationSchema = Yup.object().shape({
    time: Yup.string()
      .required('Time for reservation is required.'),
    numOfGuests: Yup.number()
      .min(1, 'Minimum of guests is one person.')
      .required('Please input the number of guests.'),
    firstName: Yup.string()
      .min(2, 'First name must be at least 2 characters long.')
      .required('First name is required.'),
    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters long.')
      .required('Last name is required.'),
    phoneNumber: Yup.string()
      .min(7, 'Phone number must be at least 7 characters long.')
      .required('Phone number is required.'),
    email: Yup.string()
      .email('Invalid email format.')
      .required('Email is required.'),
    occasion: Yup.string()
  });

  const [errors, setErrors] = useState({});
  const hasErrors = () => Object.values(errors).some((error) => error);
  const renderError = (field) => errors[field] && <p className='paragraph-text' style={{ color: 'red' }}>{errors[field]}</p>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === 'numOfGuests' ? parseInt(value, 10) || '' : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });

    validationSchema
      .validateAt(name, { [name]: updatedValue })
      .then(() => {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      })
      .catch((error) => {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        props.SubmitForm(formData);
      })
      .catch((err) => {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };

  const handleChange = (dateString) => {
    const dateObject = new Date(dateString);
    setFormData({ ...formData, date: dateObject.toISOString().split('T')[0] });
    props.dispatch({ type: 'UPDATE_TIMES', payload: dateObject });
  }

  return (
    <form onSubmit={handleSubmit} className='booking-form lead-text'>
      <h4 className='sub-title'>Table Reservation</h4>
      <fieldset>
        <div className="booking-form__field">
          <label htmlFor='date'>
            Date <sup>*</sup>
          </label>
          <input  id='date' type='date' value={formData.date} onChange={(e) => handleChange(e.target.value)}/>
          <div className="booking-form__field-error"></div>
        </div>
        <div className="booking-form__field">
          <label htmlFor='time'>
            Time <sup>*</sup>
          </label>
          <select
            id='time'
            name='time'
            value={formData.time}
            onChange={handleInputChange}
            className = 'booking-form__field-time'
          >
            <option value=''>Select a time</option>
            {props.availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
          <div className="booking-form__field-error">{renderError('time')}</div>
        </div>
        <div className="booking-form__field">
          <label htmlFor='numOfGuests'>
            Number of guests <sup>*</sup>
          </label>
          <input  id='numOfGuests' name='numOfGuests' type="number" min="1" placeholder="Number of guests" value={formData.numOfGuests} onChange={handleInputChange}/>
          <div className="booking-form__field-error">{renderError('numOfGuests')}</div>
        </div>
        <div className="booking-form__field">
          <label>
            Occasion
          </label>
          <input name='occasion' placeholder="Ex: Birthday/Anniversary" value={formData.occasion} onChange={handleInputChange}/>
          <div className="booking-form__field-error"></div>
        </div>
        <div className="booking-form__field">
          <label htmlFor='firstName'>
            First name <sup>*</sup>
          </label>
          <input  id='firstName' name='firstName' placeholder="First name" value={formData.firstName} onChange={handleInputChange}/>
          <div className="booking-form__field-error">{renderError('firstName')}</div>
        </div>
        <div className="booking-form__field">
          <label htmlFor='lastName'>Last name</label>
          <input  id='lastName' name='lastName' placeholder="Last name" value={formData.lastName} onChange={handleInputChange}/>
          <div className="booking-form__field-error">{renderError('lastName')}</div>
        </div>
        <div className="booking-form__field">
          <label htmlFor='phoneNumber'>
            Phone number <sup>*</sup>
          </label>
          <input  id='phoneNumber' name='phoneNumber' type="number" className='field__phone-number' value={formData.phoneNumber} onChange={handleInputChange}/>
          <div className="booking-form__field-error">{renderError('phoneNumber')}</div>
        </div>
        <div className="booking-form__field">
          <label htmlFor='email'>
            Email address <sup>*</sup>
          </label>
          <input  id='email' name='email' placeholder="Email address" value={formData.email} onChange={handleInputChange}/>
          <div className="booking-form__field-error">{renderError('email')}</div>
        </div>
      </fieldset>
      <Button type="submit" disabled={!hasErrors()}>
        Reserve table
      </Button>
    </form>
  )
}

export default BookingForm