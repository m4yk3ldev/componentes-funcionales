import { render, screen } from '@testing-library/react';
import UseEffect from './App';

test('renders learn react link', () => {
  render(<UseEffect />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
