import './main.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useReducer } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import BookingPage from '../BookingPage/BookingPage';
import ConfirmedBooking from '../ConfirmedBooking/ConfirmedBooking';

import { fetchAPI, submitAPI } from '../../utils/formAPI';

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

const Main = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate()

  const SubmitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      console.log(formData);
      navigate('/confirmed')
    } else {
      alert("Reservation failed. Please try again.");
    }
  };

  return (
    <main>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <Header toggleSidebar={handleViewSidebar}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reservation' element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} SubmitForm={SubmitForm}/>}/>
        <Route path='/confirmed' element={<ConfirmedBooking />}/>
      </Routes>
      <Footer />
    </main>
  )
}

export default Main