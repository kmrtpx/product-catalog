import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { RangeSlider } from './index'
import '@testing-library/jest-dom/extend-expect' // for matchers like 'toBeInTheDocument'

describe('RangeSlider component', () => {
  it('should render the range slider with two thumbs', () => {
    render(<RangeSlider onValueChange={() => {}} />)

    // Check if the range slider is in the document
    const rangeSlider = screen.getByRole('slider')
    expect(rangeSlider).toBeInTheDocument()

    // Check if the thumbs are rendered
    const thumbs = screen.getAllByRole('thumb')
    expect(thumbs).toHaveLength(2) // There should be two thumbs
  })

  it('should render with default values', () => {
    render(<RangeSlider onValueChange={() => {}} />)

    // Check if the default values are correct (thumbs should start at 25 and 75)
    const thumb1 = screen.getAllByRole('thumb')[0]
    const thumb2 = screen.getAllByRole('thumb')[1]

    // Ensure thumbs are in the correct default positions (approximate values based on default range)
    expect(thumb1).toHaveAttribute('style', expect.stringContaining('left: 25%'))
    expect(thumb2).toHaveAttribute('style', expect.stringContaining('left: 75%'))
  })

  it('should call onValueChange when the range changes', () => {
    const onValueChangeMock = jest.fn()
    render(<RangeSlider onValueChange={onValueChangeMock} />)

    // Simulate dragging the thumbs
    const thumb1 = screen.getAllByRole('thumb')[0]
    const thumb2 = screen.getAllByRole('thumb')[1]

    // Simulate a user interaction: Drag the first thumb (changing the range)
    fireEvent.mouseDown(thumb1)
    fireEvent.mouseMove(thumb1, { clientX: 50 }) // Move the thumb to a new position (50%)
    fireEvent.mouseUp(thumb1)

    // Simulate a user interaction: Drag the second thumb
    fireEvent.mouseDown(thumb2)
    fireEvent.mouseMove(thumb2, { clientX: 150 }) // Move the second thumb to a new position (100%)
    fireEvent.mouseUp(thumb2)

    // Check if the onValueChange callback was called with the expected range values
    expect(onValueChangeMock).toHaveBeenCalledWith({ min: 50, max: 100 })
  })

  it('should allow custom min, max, and step values', () => {
    render(<RangeSlider min={0} max={200} step={10} onValueChange={() => {}} />)

    // Check if the thumbs are within the new range limits (min: 0, max: 200)
    const thumb1 = screen.getAllByRole('thumb')[0]
    const thumb2 = screen.getAllByRole('thumb')[1]

    // Check that the thumbs' left style is now adjusted to the new range
    expect(thumb1).toHaveAttribute('style', expect.stringContaining('left: 12.5%')) // Example for step at 10
    expect(thumb2).toHaveAttribute('style', expect.stringContaining('left: 37.5%')) // Example for default
  })
})
