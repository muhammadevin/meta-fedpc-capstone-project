import { render, screen } from '@testing-library/react';
import ConfirmedBooking from './ConfirmedBooking';
import CheckIcon from '../../assets/check-icon.png';
import { BrowserRouter as Router } from 'react-router-dom';

describe('ConfirmedBooking Component', () => {
  it('renders correctly with image, text, and button', () => {
    render(
      <Router>
        <ConfirmedBooking />
      </Router>
    );

    const imageElement = screen.getByAltText('reservation-success-icon');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', CheckIcon);

    const headingElement = screen.getByRole('heading', { name: /You're all set!/i });
    expect(headingElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(/Please kindly check your email for confirmation./i);
    expect(paragraphElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: /Back home/i });
    expect(buttonElement).toBeInTheDocument();

    const linkElement = screen.getByRole('link', { name: /Back home/i });
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
