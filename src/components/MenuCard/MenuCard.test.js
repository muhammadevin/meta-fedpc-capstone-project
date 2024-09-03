import { render, screen } from '@testing-library/react';
import MenuCard from './MenuCard';

const mockProps = {
  image: 'test-image.jpg',
  title: 'Delicious Dish',
  price: '12.99',
  description: 'A tasty dish that you will love.'
};

describe('MenuCard Component', () => {
  it('renders the image with correct src and alt attributes', () => {
    render(<MenuCard {...mockProps} />);

    const imageElement = screen.getByAltText('menu-image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockProps.image);
  });

  it('renders the title and price correctly', () => {
    render(<MenuCard {...mockProps} />);

    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();

    const priceElement = screen.getByText(`$${mockProps.price}`);
    expect(priceElement).toBeInTheDocument();
  });

  it('renders the description correctly', () => {
    render(<MenuCard {...mockProps} />);

    const descriptionElement = screen.getByText(mockProps.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the "Order a delivery" text', () => {
    render(<MenuCard {...mockProps} />);

    const orderTextElement = screen.getByText('Order a delivery');
    expect(orderTextElement).toBeInTheDocument();
  });
});
