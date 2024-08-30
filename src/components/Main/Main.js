import './main.css'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import BookingPage from '../BookingPage/BookingPage';

const Main = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <Header toggleSidebar={handleViewSidebar}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reservation' element={<BookingPage />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default Main