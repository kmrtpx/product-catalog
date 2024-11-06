import React from 'react'
import { render, screen } from '@testing-library/react'
import { Text } from './index'
import '@testing-library/jest-dom/extend-expect'

describe('Text component', () => {
  it('Should render with default variant and text', () => {
    render(<Text>Default Text</Text>)
    const textElement = screen.getByText('Default Text')
    expect(textElement).toBeInTheDocument()
    expect(textElement).toHaveClass('text')
  })

  it('Should render with the specified variant class', () => {
    render(<Text variant="bold">Bold Text</Text>)
    const textElement = screen.getByText('Bold Text')
    expect(textElement).toHaveClass('bold')
  })

  it('Should render with custom color and weight styles', () => {
    render(<Text color="red" weight="700">Styled Text</Text>)
    const textElement = screen.getByText('Styled Text')
    expect(textElement).toHaveStyle('color: red')
    expect(textElement).toHaveStyle('fontWeight: 700')
  })

  it('Should pass additional props to the component', () => {
    render(<Text data-testid="custom-element">Custom Props</Text>)
    const textElement = screen.getByText('Custom Props')
    expect(textElement).toHaveAttribute('data-testid', 'custom-element')
  })

  it('Should apply the custom className', () => {
    render(<Text className="custom-class">Custom Class Text</Text>)
    const textElement = screen.getByText('Custom Class Text')
    expect(textElement).toHaveClass('custom-class')
  })
})
