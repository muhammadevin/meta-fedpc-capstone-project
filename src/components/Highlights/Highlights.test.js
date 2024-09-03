import { render, screen } from '@testing-library/react';
import Highlights from './Highlights';

jest.mock('../MenuCard/MenuCard', () => ({ title, price, description, image }) =>(
    <div>
      <h4>{title}</h4>
      <h4>${price}</h4>
      <p>{description}</p>
      <img src={image} alt="menu-item"/>
    </div>
  )
);

describe('Highlights Component', () => {
  it('renders the heading and button correctly', () => {
    render(<Highlights />);

    const headingElement = screen.getByText(/This weeks specials!/i);
    expect(headingElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: /Online menu/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders all MenuCard components with correct props', () => {
    render(<Highlights />);

    const cardTitles = screen.getAllByText(/Greek Salad|Bruchetta|Lemon Dessert/i);
    expect(cardTitles).toHaveLength(3);

    const cardPrices = screen.getAllByText(/\$12.98|\$5.99|\$5/i);
    expect(cardPrices).toHaveLength(3);

    const cardDescriptions = screen.getAllByText(/Lorem ipsum dolor sit amet/i);
    expect(cardDescriptions).toHaveLength(3);
  });
});
