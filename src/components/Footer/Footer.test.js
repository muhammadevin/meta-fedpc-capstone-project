import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import FooterImage from '../../assets/logo.png';

jest.mock('../FooterNav/FooterNav', () => (props) => (
  <div data-testid="footer-nav">
    <h2>{props.navCategory}</h2>
    <ul>
      {props.navItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
));

describe('Footer Component', () => {
  it('renders correctly with image and navigation items', () => {
    render(<Footer />);

    const imageElement = screen.getByAltText('footer-image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', FooterImage);

    const navItems = [
      "Home", "About", "Menu", "Reservations", "Order Online", "Login",
      "Address", "Phone number", "Email",
      "Instagram", "Facebook"
    ];

    const footerNavElements = screen.getAllByTestId('footer-nav');
    expect(footerNavElements.length).toBe(3);

    navItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
