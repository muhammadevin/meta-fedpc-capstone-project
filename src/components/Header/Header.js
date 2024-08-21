import './header.css'
import Nav from '../Nav/Nav'
import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={Logo} alt="logo"/>
      </div>
      <div className="navigation-container">
        <Nav />
      </div>
    </div>
  )
}

export default Header