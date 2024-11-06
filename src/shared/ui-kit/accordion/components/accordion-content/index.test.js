import { render, screen } from '@testing-library/react'
import React from 'react'
import { Accordion } from '../../index'
import { AccordionContent } from './index'

describe('AccordionContent Component', () => {
  it('renders with children content', () => {
    const content = 'This is an accordion content.'

    render(
        <Accordion>
          <AccordionContent>{content}</AccordionContent>
        </Accordion>
    )

    const accordionContentText = screen.getByText(content)
    expect(accordionContentText).toBeInTheDocument()
    expect(accordionContentText).toHaveClass('accordionContentText')
  })

  it('applies custom className', () => {
    const content = 'Custom class test content.'
    const customClass = 'custom-class'

    render(
        <AccordionContent className={customClass}>{content}</AccordionContent>
    )

    const accordionContent = screen.getByText(content)
    expect(accordionContent).toHaveClass(customClass)
  })

  it('renders with default styles', () => {
    const content = 'Default styles test content.'

    render(
        <AccordionContent>{content}</AccordionContent>
    )

    const accordionContent = screen.getByText(content)
    expect(accordionContent).toHaveClass('accordionContent')
  })
})
