import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Checkbox } from './index'
import '@testing-library/jest-dom/extend-expect' // for matchers like 'toBeInTheDocument'

describe('Checkbox component', () => {
  it('should render the checkbox with label', () => {
    render(<Checkbox label="Test Checkbox" onCheckedChange={() => {}} />)

    // Check if the checkbox is in the document
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()

    // Check if the label is rendered correctly
    const label = screen.getByText('Test Checkbox')
    expect(label).toBeInTheDocument()
  })

  it('should render the checkbox as checked when checked prop is true', () => {
    render(<Checkbox checked={true} label="Checked Checkbox" onCheckedChange={() => {}} />)

    // Check if the checkbox is checked
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked() // Ensure the checkbox is checked
  })

  it('should render the checkbox as unchecked when checked prop is false', () => {
    render(<Checkbox checked={false} label="Unchecked Checkbox" onCheckedChange={() => {}} />)

    // Check if the checkbox is unchecked
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked() // Ensure the checkbox is unchecked
  })

  it('should call onCheckedChange when clicked', () => {
    const onCheckedChangeMock = jest.fn()
    render(<Checkbox checked={false} onCheckedChange={onCheckedChangeMock} label="Checkbox" />)

    // Simulate a click to toggle the checkbox
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    // Ensure onCheckedChange is called with the correct value
    expect(onCheckedChangeMock).toHaveBeenCalledWith(true) // Checkbox should be checked after click
  })

  it('should display the correct label', () => {
    render(<Checkbox label="Custom Label" onCheckedChange={() => {}} />)

    // Check if the label text is correctly rendered
    const label = screen.getByText('Custom Label')
    expect(label).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    render(<Checkbox className="custom-class" label="Styled Checkbox" onCheckedChange={() => {}} />)

    // Check if the custom className is applied
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveClass('custom-class')
  })
})
