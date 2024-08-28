import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import BookingPage from './components/BookingPage/BookingPage';

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <Header toggleSidebar={handleViewSidebar}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reservation' element={<BookingPage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
