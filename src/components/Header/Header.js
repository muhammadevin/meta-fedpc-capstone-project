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
          <div className="hamburger-icon" aria-label='On Click' onClick={toggleSidebar}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header