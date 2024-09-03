import './nav.css'
import { useState } from 'react';

const Nav = ( props ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="burger-menu" aria-label='On Click' onClick={toggleMenu}>
        <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className='navigation-section'>
        {props.navItems.map((item, index) => (
          <li key={index}>
            <a className='paragraph-text navigation-items' href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
