import { render, screen, fireEvent } from '@testing-library/react'
import { FixedButton } from './index'
import '@testing-library/jest-dom'

test('renders FixedButton and triggers onClick', () => {
  const handleClick = jest.fn()
  render(<FixedButton onClick={handleClick} label="Click me" />)

  const button = screen.getByTestId('fixed-button')
  const container = screen.getByTestId('fixed-button-container')

  expect(container).toBeInTheDocument()
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('Click me')

  fireEvent.click(button)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
