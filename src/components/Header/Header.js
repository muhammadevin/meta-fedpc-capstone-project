import './header.css'
import Nav from '../Nav/Nav'
import Logo from '../../assets/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import navItems from '../../data/navItems';

const Header = ({ toggleSidebar }) => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="header-logo">
          <img src={Logo} alt="logo"/>
        </div>
        <div className="navigation-container">
          <Nav navItems={navItems}/>
          <button
            className="hamburger-icon"
            aria-label="Toggle Menu"
            onClick={toggleSidebar}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header