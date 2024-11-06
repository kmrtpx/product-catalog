import { render, screen, fireEvent } from '@testing-library/react'
import { AccordionTrigger } from './index'
import '@testing-library/jest-dom'

test('renders AccordionTrigger and checks icon', () => {
  render(<AccordionTrigger>Test Accordion</AccordionTrigger>)

  const trigger = screen.getByTestId('accordion-trigger')
  expect(trigger).toBeInTheDocument()

  const icon = screen.getByRole('img')
  expect(icon).toBeInTheDocument()

  fireEvent.click(trigger)
})
