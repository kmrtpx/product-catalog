import { render, screen } from '@testing-library/react'
import { AccordionItem } from './index'

describe('AccordionItem', () => {
  it('renders children correctly', () => {
    render(
            <AccordionItem value="item1">
                <div>Test Content</div>
            </AccordionItem>
    )
    expect(screen.getByTestId('accordion-item')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
