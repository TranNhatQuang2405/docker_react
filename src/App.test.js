import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Trần Nhất Quang HELLO WORLD/i);
  expect(linkElement).toBeInTheDocument();
});
