import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from './index'
import '@testing-library/jest-dom/extend-expect' // for matchers like 'toBeInTheDocument'

describe('Button component', () => {
  it('should render the button with children content', () => {
    render(<Button>Click Me</Button>)

    // Check if the button with text 'Click Me' is rendered
    const button = screen.getByText('Click Me')
    expect(button).toBeInTheDocument()
  })

  it('should apply the correct variant class', () => {
    render(<Button variant="primary">Primary Button</Button>)

    // Check if the correct variant class is applied
    const button = screen.getByRole('button')
    expect(button).toHaveClass('primary')
  })

  it('should apply the correct size class', () => {
    render(<Button size="large">Large Button</Button>)

    // Check if the correct size class is applied
    const button = screen.getByRole('button')
    expect(button).toHaveClass('large')
  })

  it('should apply custom className', () => {
    render(<Button className="custom-class">Styled Button</Button>)

    // Check if the custom class is applied
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('should apply custom color passed via props', () => {
    render(<Button color="red">Colored Button</Button>)

    // Check if the inline style is applied correctly
    const button = screen.getByRole('button')
    expect(button).toHaveStyle('color: red')
  })

  it('should handle click events', () => {
    const onClickMock = jest.fn()
    render(<Button onClick={onClickMock}>Click Me</Button>)

    // Simulate a click event on the button
    fireEvent.click(screen.getByText('Click Me'))

    // Check if the onClick handler is called
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
