import { render, screen } from '@testing-library/react';
import About from './About';
import About1 from '../../assets/about1.jpg';
import About2 from '../../assets/about2.jpg';

describe('About Component', () => {
  it('renders correctly with the correct content and images', () => {
    render(<About />);

    const headingElement = screen.getByRole('heading', { name: /Little Lemon/i });
    expect(headingElement).toBeInTheDocument();

    const subTitleElement = screen.getByRole('heading', { name: /Chicago/i });
    expect(subTitleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit/i);
    expect(descriptionElement).toBeInTheDocument();

    const firstImgElement = screen.getByAltText('About Restaurant');
    expect(firstImgElement).toHaveAttribute('src', About1);

    const secondImgElement = screen.getByAltText('Chefs');
    expect(secondImgElement).toHaveAttribute('src', About2);
  });
});
