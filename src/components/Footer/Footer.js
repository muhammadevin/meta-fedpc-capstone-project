import FooterNav from "../FooterNav/FooterNav"
import FooterImage from '../../assets/logo.png'
import './footer.css'

const footerItems = [
  {
    navCategory: "Doormat Navigation",
    navItems: ["Home","About","Menu","Reservations","Order Online","Login"]
  },
  {
    navCategory: "Contact",
    navItems: ["Address","Phone number","Email"]
  },
  {
    navCategory: "Social Media Links",
    navItems: ["Instagram","Facebook"]
  },
]

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className="footer-container">
        <div className="footer-image">
          <img src={FooterImage} alt="footer-image"/>
        </div>
        <div className="footer-nav">
          {
            footerItems.map((footerItem) => {
              return (
                <FooterNav navCategory={footerItem.navCategory} navItems={footerItem.navItems}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Footer