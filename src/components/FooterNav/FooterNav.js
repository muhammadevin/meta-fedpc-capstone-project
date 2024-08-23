import './footernav.css'

const FooterNav = (props) => {
  return (
    <div className='footer-navigation'>
      <p className="section-categories">{props.navCategory}</p>
      <nav>
        <ul className="footer-navigation__section">
          {props.navItems.map((nav, index) => (
            <li key={index}>
              <a href={`#${nav}`} className="footer-navigation__items">
                <p>{nav}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default FooterNav