// Testimonials.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Testimonials from './Testimonials';

const testimonials = [
  {
    name: "Ahmad",
    rating: 5,
    review: "Great food!",
    imageLink: "https://storage.nu.or.id/storage/post/1_1/mid/1481283354584a971ae27d4.png"
  },
  {
    name: "Joshua",
    rating: 5,
    review: "Quality service.",
    imageLink: "https://cdn.theathletic.com/cdn-cgi/image/width=1200,height=1200,fit=cover/app/uploads/2024/06/18093614/GettyImages-2152327973-scaled-e1718729659904.jpg"
  },
  {
    name: "Luke",
    rating: 4,
    review: "Top notch",
    imageLink: "https://uproxx.com/wp-content/uploads/2021/02/modern-family-1.jpg?w=1024"
  },
  {
    name: "Anthony",
    rating: 5,
    review: "+1000 aura",
    imageLink: "https://akcdn.detik.net.id/community/media/visual/2024/05/15/antony_43.png?w=400&q=90"
  },
];

jest.mock('../TestimonialsCard/TestimonialsCard', () => {
  return ({ name, rating, review, imageLink }) => (
    <div data-testid="testimonials-card">
      <div>{name}</div>
      <div>{rating}</div>
      <div>{review}</div>
      <div>{imageLink}</div>
    </div>
  );
});

describe('Testimonials Component', () => {
  it('renders the correct number of TestimonialsCard components', () => {
    render(<Testimonials />);

    const cardElements = screen.getAllByTestId('testimonials-card');
    expect(cardElements).toHaveLength(testimonials.length); // Ensure the number of cards matches the length of the testimonials array
  });

  it('renders each TestimonialsCard with the correct props', () => {
    render(<Testimonials />);

    const cards = screen.getAllByTestId('testimonials-card');

    cards.forEach((card, index) => {
      expect(card).toHaveTextContent(testimonials[index].name);
      expect(card).toHaveTextContent(testimonials[index].rating.toString());
      expect(card).toHaveTextContent(testimonials[index].review);
      expect(card).toHaveTextContent(testimonials[index].imageLink);
    });
  });
});
