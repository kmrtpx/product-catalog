import { render, screen } from '@testing-library/react'
import { ProductsList } from './index'
import '@testing-library/jest-dom'

test('displays "Products Not Found" when no products are passed', () => {
  render(<ProductsList products={[]} loading={false} />)

  expect(screen.getByTestId('empty-box')).toBeInTheDocument()
  expect(screen.getByTestId('empty-text')).toHaveTextContent('Products Not Found')
})

test('renders product cards when products are passed', () => {
  const mockProducts = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' }
  ]

  render(<ProductsList products={mockProducts} loading={false} />)

  expect(screen.getByTestId('product-list')).toBeInTheDocument()
  expect(screen.getAllByTestId('product-card')).toHaveLength(mockProducts.length)
})

test('renders loading state correctly', () => {
  render(<ProductsList products={[]} loading={true} />)

  // Check if loading behavior is correctly handled if needed
})
