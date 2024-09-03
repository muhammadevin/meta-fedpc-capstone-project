import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders correctly with children', () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    const titleElement = screen.getByText(/Click Me/i);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('card-title');
  });
});
