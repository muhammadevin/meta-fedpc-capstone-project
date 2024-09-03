import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from './Nav';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Contact', href: '/contact' }
];

describe('Nav Component', () => {
  it('renders navigation items correctly', () => {
    render(<Nav navItems={navItems} />);

    navItems.forEach((item) => {
      const linkElement = screen.getByText(item.label);
      expect(linkElement).toBeInTheDocument();

      // Verify that the link has the correct href attribute
      expect(linkElement.closest('a')).toHaveAttribute('href', item.href);
    });
  });

  it('renders the correct number of navigation items', () => {
    render(<Nav navItems={navItems} />);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(navItems.length);
  });
});
