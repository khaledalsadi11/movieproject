import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Form } from './components/Form';
import { MoviCard } from './components/MoviCard';
import FavoritePage from './pages/FavoritePage';

test('title render', () => {
  render(<App />);
  const title = screen.getByTestId("test");

  expect(title).toHaveContent("No favorite movies yet.");
});
