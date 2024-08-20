const FooterNav = (props) => {
  return (
    <div className='footer-navigation'>
      <p className="section-categories">{props.navCategory}</p>
      <nav>
        <ul>
          {props.navItems.map((nav, index) => (
            <li key={index}>
              <a href={`#${nav}`}>
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