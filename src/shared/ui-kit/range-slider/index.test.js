import { render, screen } from '@testing-library/react'
import { RangeSlider } from './index'
import '@testing-library/jest-dom'

test('Renders RangeSlider with default values', () => {
  render(<RangeSlider onValueChange={jest.fn()} />)

  const sliderRoot = screen.getByTestId('range-slider-root')
  const thumb1 = screen.getByTestId('range-slider-thumb-1')
  const thumb2 = screen.getByTestId('range-slider-thumb-2')

  expect(sliderRoot).toBeInTheDocument()
  expect(thumb1).toBeInTheDocument()
  expect(thumb2).toBeInTheDocument()
})
