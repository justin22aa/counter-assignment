import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  // Verify that the counter message "Counter" is rendered
  const messageElement = screen.getByText(/Counter/i);
  expect(messageElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Verify that the initial count is 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Find the increment button and click it
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  // Verify the count has been incremented
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // First, increment the count to ensure it's above 0
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton); // Now the count is 1

  // Then, find the decrement button and click it to decrement the count
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);

  // Verify the count has been decremented back to 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

