import { render, screen, fireEvent } from "@testing-library/react";
import { act } from 'react'
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const mockSubmit = jest.fn();
  const mockDispatch = jest.fn();
  const availableTimes = ['10:00', '12:00', '18:30'];

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        SubmitForm={mockSubmit}
      />
    );
  });

  test('Renders the BookingForm heading', () => {
    const headingElement = screen.getByText("Table Reservation");
    expect(headingElement).toBeInTheDocument();
  })

  test('renders form fields correctly', () => {
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  });

  test('validates required fields', async () => {
    await act(async () => {
      fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: '' } });
      fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: '' } });
      fireEvent.change(screen.getByLabelText(/Phone number/i), { target: { value: '' } });
      fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: '' } });

      fireEvent.click(screen.getByRole('button', { name: /reserve table/i }));
    });

    expect(screen.getByText(/First name is required./i)).toBeInTheDocument();
    expect(screen.getByText(/Last name is required./i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number is required./i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required./i)).toBeInTheDocument();
  });

  test('submits the form when all required fields are filled', async () => {
    await act(async () => {
      fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-08-22' } });
      fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:30' } });
      fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
      fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'Dede' } });
      fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Pritchett' } });
      fireEvent.change(screen.getByLabelText(/Phone number/i), { target: { value: '12345678' } });
      fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'dede@example.com' } });

      fireEvent.click(screen.getByRole('button', { name: /reserve table/i }));
    });

    expect(mockSubmit).toHaveBeenCalled();
  });

  test('updates the time options correctly based on available times', () => {
    const timeSelect = screen.getByLabelText(/Time/i);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect.children.length).toBe(availableTimes.length + 1);
    availableTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test('dispatches update times on date change', () => {
    const dateInput = screen.getByLabelText(/Date/i);
    fireEvent.change(dateInput, { target: { value: '2024-09-01' } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      payload: new Date('2024-09-01'),
    });
  });
});