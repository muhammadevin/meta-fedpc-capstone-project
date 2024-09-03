import './nav.css'

const Nav = ( props ) => {
  return (
    <nav>
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
