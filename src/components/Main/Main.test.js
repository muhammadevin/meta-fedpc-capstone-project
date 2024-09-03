import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from '../../utils/formAPI';

jest.mock('../../utils/formAPI', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  it('should call fetchAPI with today`s date', () => {
    const today = new Date();
    fetchAPI.mockReturnValue(['10:00', '11:00', '12:00']);

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledWith(today);
    expect(result).toEqual(['10:00', '11:00', '12:00']);
  });
});

describe('updateTimes', () => {
  it('should call fetchAPI with the selected date when action type is UPDATE_TIMES', () => {
    const mockDate = new Date('2024-08-31');
    fetchAPI.mockReturnValue(['13:00', '14:00']);

    const result = updateTimes([], { type: 'UPDATE_TIMES', payload: mockDate });

    expect(fetchAPI).toHaveBeenCalledWith(mockDate);
    expect(result).toEqual(['13:00', '14:00']);
  });

  it('should return the current state if the action type is not UPDATE_TIMES', () => {
    const currentState = ['10:00', '11:00'];
    const result = updateTimes(currentState, { type: 'UNKNOWN_ACTION', payload: new Date() });

    expect(result).toBe(currentState);
  });
});
