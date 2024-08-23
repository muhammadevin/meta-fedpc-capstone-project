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
      <Header toggleSidebar={handleViewSidebar}/>
      <Main />
      <Footer />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </>
  );
}

export default App;
