import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the Home page', () => {
  render(<App />);
});

/*test('renders learn Header and link to top earthquakes', () => {
  render(<Header />);
  const linkElement = screen.getByText(/FUTURICE EARTHQUAKES/i);
  expect(linkElement).toBeInTheDocument();
});*/

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
