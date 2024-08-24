import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <Header toggleSidebar={handleViewSidebar}/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
