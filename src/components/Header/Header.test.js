import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import navItems from '../../data/navItems';

describe('Header Component', () => {
  const mockToggleSidebar = jest.fn();

  it('renders the logo and navigation items', () => {
    render(<Header toggleSidebar={mockToggleSidebar} />);

    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();

    navItems.forEach((item) => {
      const navLink = screen.getByText(item.label);
      expect(navLink).toBeInTheDocument();
    });
  });

  it('renders the hamburger icon only on mobile view', () => {
    render(<Header toggleSidebar={mockToggleSidebar} />);

    const hamburgerIcon = screen.queryByRole('button', { name: /Toggle Menu/i });
    expect(hamburgerIcon).not.toBeVisible();

    global.innerWidth = 768;
    global.dispatchEvent(new Event('resize'));

    const mobileHamburgerIcon = screen.getByRole('button', { name: /Toggle Menu/i });

    expect(mobileHamburgerIcon).toBeVisible();
  });

  it('calls toggleSidebar when the hamburger icon is clicked', () => {
    render(<Header toggleSidebar={mockToggleSidebar} />);

    global.innerWidth = 768;
    global.dispatchEvent(new Event('resize'));

    const hamburgerIcon = screen.getByRole('button', { name: /Toggle Menu/i });
    fireEvent.click(hamburgerIcon);

    expect(mockToggleSidebar).toHaveBeenCalledTimes(1);
  });
});
