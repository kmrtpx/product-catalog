import { render, screen } from '@testing-library/react'
import { Button } from './index'
import '@testing-library/jest-dom'

describe('Button', () => {
  it('Renders button with children', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('Applies the correct class names', () => {
    render(<Button variant="primary" size="large">Click Me</Button>)
    const button = screen.getByText('Click Me')
    expect(button).toHaveClass('primary')
    expect(button).toHaveClass('large')
  })

  it('Applies custom color style', () => {
    render(<Button color="red">Click Me</Button>)
    const button = screen.getByText('Click Me')
    expect(button).toHaveStyle('color: red')
  })

  it('Applies custom className', () => {
    render(<Button className="custom-class">Click Me</Button>)
    const button = screen.getByText('Click Me')
    expect(button).toHaveClass('custom-class')
  })
})
