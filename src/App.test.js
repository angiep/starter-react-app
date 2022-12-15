import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  expect(screen.getByText('React Exercise')).toBeInTheDocument();
});

test('renders main component', () => {
  render(<App />);
  expect(screen.getByText('My Main Component')).toBeInTheDocument();
})