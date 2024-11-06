import { render, screen } from '@testing-library/react'
import { FilterBox } from './index'

test('renders FilterBox component', () => {
  render(<FilterBox prop1="test" prop2={1} />)
  const filterBox = screen.getByRole('div')
  expect(filterBox).toBeInTheDocument()
})
