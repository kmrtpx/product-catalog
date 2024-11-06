import { render, screen } from '@testing-library/react'
import { AccordionRoot } from './index'

describe('AccordionRoot', () => {
  it('renders children correctly', () => {
    render(
            <AccordionRoot defaultValue="item1">
                <div>Test Content</div>
            </AccordionRoot>
    )
    expect(screen.getByTestId('accordion-root')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
