import { render, screen } from '@testing-library/react';
import FooterNav from './FooterNav';

describe('FooterNav Component', () => {
  const mockProps = {
    navCategory: 'Doormat Navigation',
    navItems: ['Home', 'About', 'Menu', 'Reservations'],
  };

  it('renders correctly with navCategory and navItems', () => {
    render(<FooterNav navCategory={mockProps.navCategory} navItems={mockProps.navItems} />);

    const categoryElement = screen.getByText(mockProps.navCategory);
    expect(categoryElement).toBeInTheDocument();
    expect(categoryElement).toHaveClass('section-categories');

    mockProps.navItems.forEach((item) => {
      const linkElement = screen.getByRole('link', { name: item });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', `#${item}`);
      expect(linkElement).toHaveClass('footer-navigation__items');
    });
  });

  it('renders the correct number of nav items', () => {
    render(<FooterNav navCategory={mockProps.navCategory} navItems={mockProps.navItems} />);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements.length).toBe(mockProps.navItems.length);
  });
});
