import './nav.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Order Online', href: '#order-online' },
  { label: 'Login', href: '#login' }
];

const Nav = () => {
  return (
    <nav>
      <ul className='navigation-section'>
        {navItems.map((item, index) => (
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
