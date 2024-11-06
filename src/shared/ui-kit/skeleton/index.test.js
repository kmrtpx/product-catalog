import React from 'react'
import { render, screen } from '@testing-library/react'
import { Skeleton } from './index'
import '@testing-library/jest-dom/extend-expect' // for matchers like 'toBeInTheDocument'

describe('Skeleton component', () => {
  it('should render the skeleton loader', () => {
    render(<Skeleton />)

    // Check if the skeleton loader div is rendered
    const skeletonLoader = screen.getByRole('generic', { name: /skeleton/i })
    expect(skeletonLoader).toBeInTheDocument()
  })

  it('should have the skeleton image div', () => {
    render(<Skeleton />)

    // Check if the skeleton image div is rendered
    const skeletonImage = screen.getByRole('generic', { name: /image/i })
    expect(skeletonImage).toBeInTheDocument()
  })

  it('should render the skeleton container with rows and columns', () => {
    render(<Skeleton />)

    // Check if there are two skeleton containers (row and column)
    const skeletonContainers = screen.getAllByRole('generic', { name: /container/i })
    expect(skeletonContainers).toHaveLength(2)
  })

  it('should have skeleton lines with different lengths', () => {
    render(<Skeleton />)

    // Check if the skeleton lines with different classes are rendered
    const shortLine = screen.getByRole('generic', { name: /short/i })
    const extraShortLine = screen.getByRole('generic', { name: /extra-short/i })
    const mediumLine = screen.getByRole('generic', { name: /medium/i })
    const longLine = screen.getByRole('generic', { name: /long/i })

    expect(shortLine).toBeInTheDocument()
    expect(extraShortLine).toBeInTheDocument()
    expect(mediumLine).toBeInTheDocument()
    expect(longLine).toBeInTheDocument()
  })
})
