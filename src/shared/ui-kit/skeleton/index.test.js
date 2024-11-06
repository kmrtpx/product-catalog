import { render, screen } from '@testing-library/react'
import { Skeleton } from './index'
import '@testing-library/jest-dom'

test('renders the Skeleton loader', () => {
  render(<Skeleton />)

  // Check if the skeleton loader is rendered
  const skeletonLoader = screen.getByTestId('skeleton-loader')
  expect(skeletonLoader).toBeInTheDocument()

  // Check if the skeleton image is rendered
  const skeletonImage = screen.getByTestId('skeleton-image')
  expect(skeletonImage).toBeInTheDocument()

  // Check if the skeleton container is rendered
  const skeletonContainer = screen.getByTestId('skeleton-container')
  expect(skeletonContainer).toBeInTheDocument()

  // Check if the row and column containers are rendered
  const row = screen.getByTestId('skeleton-row')
  const column = screen.getByTestId('skeleton-column')
  expect(row).toBeInTheDocument()
  expect(column).toBeInTheDocument()
})
