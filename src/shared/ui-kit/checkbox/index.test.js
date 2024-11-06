import { render, fireEvent, screen } from '@testing-library/react'
import { Checkbox } from './index'
import '@testing-library/jest-dom'

test('Renders checkbox and label', () => {
  render(<Checkbox checked={false} onCheckedChange={() => {}} label="Test Label" />)
  expect(screen.getByText('Test Label')).toBeInTheDocument()
})

test('Checkbox can be checked and unchecked', () => {
  const onCheckedChange = jest.fn()
  render(<Checkbox checked={false} onCheckedChange={onCheckedChange} label="Test Label" />)

  const checkbox = screen.getByRole('checkbox')
  fireEvent.click(checkbox)
  expect(onCheckedChange).toHaveBeenCalledTimes(1)
})
