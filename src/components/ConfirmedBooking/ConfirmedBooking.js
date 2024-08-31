import React from 'react'
import './confirmedbooking.css'
import CheckIcon from '../../assets/check-icon.png'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const ConfirmedBooking = () => {
  return (
    <div className='confirmed-booking'>
      <img src={CheckIcon} alt='reservation-success-icon'></img>
      <h1>You're all set!</h1>
      <p>Please kindly check your email for confirmation.</p>
      <Link to='/'>
        <Button>Back home</Button>
      </Link>
    </div>
  )
}

export default ConfirmedBooking