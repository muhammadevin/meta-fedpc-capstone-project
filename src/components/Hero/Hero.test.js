import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Hero';
import HeroImage from '../../assets/restauranfood.jpg';

const renderWithRouter = (ui) => render(<Router>{ui}</Router>);

describe('Hero Component', () => {
  it('renders the heading, subtitle, and description', () => {
    renderWithRouter(<Hero />);

    const headingElement = screen.getByText(/Little Lemon/i);
    expect(headingElement).toBeInTheDocument();

    const subTitleElement = screen.getByText(/Chicago/i);
    expect(subTitleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(/We are family owned Mediterranean restaurant/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the button with correct text and link', () => {
    renderWithRouter(<Hero />);

    const buttonElement = screen.getByRole('button', { name: /Reserve a table/i });
    expect(buttonElement).toBeInTheDocument();

    const linkElement = screen.getByRole('link', { name: /Reserve a table/i });
    expect(linkElement).toHaveAttribute('href', '/reservation');
  });

  it('renders the hero image with correct source and alt text', () => {
    renderWithRouter(<Hero />);

    const imageElement = screen.getByAltText('hero-image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', HeroImage);
  });
});
