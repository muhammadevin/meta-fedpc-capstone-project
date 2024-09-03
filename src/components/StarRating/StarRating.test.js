import { render, screen } from '@testing-library/react';
import StarRating from './StarRating';
import Star from '../../assets/star.svg';

describe('StarRating Component', () => {
  it('renders the correct number of stars', () => {
    const starCount = 5;
    render(<StarRating stars={starCount} />);

    const starElements = screen.getAllByAltText('star');
    expect(starElements).toHaveLength(starCount);

    starElements.forEach((star) => {
      expect(star).toHaveAttribute('src', Star);
    });
  });

  it('renders no stars when stars prop is 0', () => {
    render(<StarRating stars={0} />);

    const starElements = screen.queryAllByAltText('star');
    expect(starElements).toHaveLength(0);
  });
});
