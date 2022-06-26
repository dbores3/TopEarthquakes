import { render } from '@testing-library/react'
import Spinner from '../../components/Spinner'

test('Renders Spinner Loader with correct classes', () => {
  render(<Spinner />)
});