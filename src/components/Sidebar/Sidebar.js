import './sidebar.css';
import { IoClose } from "react-icons/io5";
import navItems from '../../data/navItems';

const Sidebar = ( props ) => {
  const sidebarClass = props.isOpen ? "sidebar-open" : "";
  return (
    <div className={`sidebar ${sidebarClass}`}>
      <IoClose className='close-btn' aria-label='On Click' onClick={props.toggleSidebar}/>
      <ul className='sidebar-items'>
        {navItems.map((item, index) => (
          <li key={index}>
            <a className='section-title sidebar-link' href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
