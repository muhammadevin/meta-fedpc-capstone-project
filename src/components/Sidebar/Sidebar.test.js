import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from './Sidebar';
import navItems from '../../data/navItems';

jest.mock('../../data/navItems', () => [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]);

describe('Sidebar Component', () => {
  // it('renders correctly when closed', () => {
  //   render(<Sidebar isOpen={false} toggleSidebar={() => {}} />);

  //   const sidebarElement = screen.getByRole('presentation');
  //   expect(sidebarElement).toHaveClass('sidebar');
  //   expect(sidebarElement).not.toHaveClass('sidebar-open');
  // });

  // it('renders correctly when open', () => {
  //   render(<Sidebar isOpen={true} toggleSidebar={() => {}} />);

  //   const sidebarElement = screen.getByRole('presentation');
  //   expect(sidebarElement).toHaveClass('sidebar');
  //   expect(sidebarElement).toHaveClass('sidebar-open');
  // });

  it('calls toggleSidebar when close button is clicked', () => {
    const toggleSidebar = jest.fn();
    render(<Sidebar isOpen={true} toggleSidebar={toggleSidebar} />);

    const closeButton = screen.getByLabelText('On Click');
    fireEvent.click(closeButton);

    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });

  it('renders the correct navigation items', () => {
    render(<Sidebar isOpen={true} toggleSidebar={() => {}} />);

    navItems.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(item.label)).toHaveAttribute('href', item.href);
    });
  });
});
