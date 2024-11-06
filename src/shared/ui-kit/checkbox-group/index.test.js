import { render, fireEvent, screen } from '@testing-library/react'
import { CheckboxGroup } from './index'
import '@testing-library/jest-dom'

test('Renders checkbox group and selects an option', () => {
  const handleChange = jest.fn()
  render(
      <CheckboxGroup
          options={['Option 1', 'Option 2', 'Option 3']}
          onChange={handleChange}
          initialValue="Option 1"
      />
  )

  const option1 = screen.getByLabelText('Option 1')
  const option2 = screen.getByLabelText('Option 2')

  fireEvent.click(option2)
  expect(handleChange).toHaveBeenCalledWith('Option 2')

  fireEvent.click(option1)
  expect(handleChange).toHaveBeenCalledWith('Option 1')
})

test('Checkbox group maintains correct selection', () => {
  render(
      <CheckboxGroup
          options={['Option 1', 'Option 2']}
          onChange={() => {}}
          initialValue="Option 2"
      />
  )
  expect(screen.getByLabelText('Option 1')).not.toBeChecked()
  expect(screen.getByLabelText('Option 2')).toBeChecked()
})
