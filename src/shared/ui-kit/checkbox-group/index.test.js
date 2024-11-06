import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { CheckboxGroup } from './index'
import '@testing-library/jest-dom/extend-expect'

jest.mock('../checkbox', () => ({
  Checkbox: jest.fn(() => <div className="mock-checkbox" />)
}))

describe('CheckboxGroup component', () => {
  it('should render a list of checkboxes based on the options prop', () => {
    const options = ['Option 1', 'Option 2', 'Option 3']
    render(<CheckboxGroup options={options} onChange={() => {}} initialValue={null} />)

    // Check if all the options are rendered as checkboxes
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument()
    })
  })

  it('should call onChange with the correct value when a checkbox is clicked', () => {
    const onChangeMock = jest.fn()
    const options = ['Option 1', 'Option 2', 'Option 3']
    render(<CheckboxGroup options={options} onChange={onChangeMock} initialValue={null} />)

    fireEvent.click(screen.getByText('Option 1'))
    expect(onChangeMock).toHaveBeenCalledWith('Option 1')

    fireEvent.click(screen.getByText('Option 1'))
    expect(onChangeMock).toHaveBeenCalledWith(null)
  })

  it('should only allow one checkbox to be selected at a time', () => {
    const onChangeMock = jest.fn()
    const options = ['Option 1', 'Option 2', 'Option 3']
    render(<CheckboxGroup options={options} onChange={onChangeMock} initialValue={null} />)

    fireEvent.click(screen.getByText('Option 1'))
    fireEvent.click(screen.getByText('Option 2'))

    expect(onChangeMock).toHaveBeenCalledWith('Option 2')
  })

  it('should render with the initialValue prop if provided', () => {
    const onChangeMock = jest.fn()
    const options = ['Option 1', 'Option 2', 'Option 3']
    render(<CheckboxGroup options={options} onChange={onChangeMock} initialValue="Option 2" />)

    // Mocked Checkbox component should have class "checked" based on initialValue
    expect(screen.getByText('Option 2')).toHaveClass('checked')
  })

  it('should call onChange with null if the selected option is clicked again', () => {
    const onChangeMock = jest.fn()
    const options = ['Option 1', 'Option 2', 'Option 3']
    render(<CheckboxGroup options={options} onChange={onChangeMock} initialValue="Option 2" />)

    fireEvent.click(screen.getByText('Option 2'))
    expect(onChangeMock).toHaveBeenCalledWith(null)
  })
})
