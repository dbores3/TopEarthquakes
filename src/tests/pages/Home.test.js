import { render,screen } from '@testing-library/react'
import Home from '../../pages/Home'

test('Renders Home & checks for the header', () => {
  render(<Home />)
  const hEl = screen.getByRole('heading')
  expect(hEl).toHaveTextContent(/Futurice Earthquake's App/)
});