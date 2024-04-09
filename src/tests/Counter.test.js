import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId("count");
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'));
  const count = screen.getByTestId("count");
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'));
  const count = screen.getByTestId("count");
});
