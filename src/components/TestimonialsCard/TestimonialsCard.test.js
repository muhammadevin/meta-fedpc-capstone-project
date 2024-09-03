import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestimonialsCard from './TestimonialsCard';

jest.mock('../StarRating/StarRating', () => {
  return ({ stars }) => (
    <div data-testid="star-rating">
      {Array.from({ length: stars }, (_, index) => (
        <span key={index}>⭐</span>
      ))}
    </div>
  );
});

describe('TestimonialsCard Component', () => {
  const props = {
    rating: 4,
    imageLink: 'https://example.com/image.jpg',
    name: 'Antony',
    review: 'This is a great product!'
  };

  it('renders the rating correctly', () => {
    render(<TestimonialsCard {...props} />);

    const starRating = screen.getByTestId('star-rating');
    expect(starRating).toBeInTheDocument();
    expect(starRating.children).toHaveLength(props.rating);
  });

  it('renders the profile image correctly', () => {
    render(<TestimonialsCard {...props} />);

    const profileImage = screen.getByAltText('profile');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', props.imageLink);
  });

  it('renders the name and review correctly', () => {
    render(<TestimonialsCard {...props} />);

    const nameElement = screen.getByText(props.name);
    expect(nameElement).toBeInTheDocument();
    const reviewElement = screen.getByText(props.review);
    expect(reviewElement).toBeInTheDocument();
  });
});
