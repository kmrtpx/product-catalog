import { render, screen } from '@testing-library/react'
import { AccordionContent } from './index'

test('renders AccordionContent with given children', () => {
  render(<AccordionContent>Test Content</AccordionContent>)

  const content = screen.getByTestId('accordion-content')
  expect(content).toBeInTheDocument()
  expect(content).toHaveTextContent('Test Content')
})

test('applies custom className', () => {
  render(
      <AccordionContent className="custom-class">Test Content</AccordionContent>
  )

  const content = screen.getByTestId('accordion-content')
  expect(content).toHaveClass('custom-class')
})
