import { render, screen } from '@testing-library/react'
import { ProductCard } from './index'
import '@testing-library/jest-dom'

const mockProduct = {
  name: 'Product Name',
  imageUrl: 'http://example.com/image.jpg',
  rating: 4.5,
  brand: 'Product Brand',
  category: 'Product Category',
  price: 100
}

test('renders loading skeleton when loading is true', () => {
  render(<ProductCard product={mockProduct} loading={true} />)

  expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument()
})

test('renders product details when loading is false', () => {
  render(<ProductCard product={mockProduct} loading={false} />)

  expect(screen.getByTestId('product-card')).toBeInTheDocument()
  expect(screen.getByTestId('product-name')).toHaveTextContent(mockProduct.name)
  expect(screen.getByTestId('product-image')).toHaveAttribute('src', mockProduct.imageUrl)
  expect(screen.getByTestId('product-rating')).toHaveTextContent(mockProduct.rating)
  expect(screen.getByTestId('product-brand')).toHaveTextContent(mockProduct.brand)
  expect(screen.getByTestId('product-category')).toHaveTextContent(mockProduct.category)
  expect(screen.getByTestId('product-price')).toHaveTextContent(`$${mockProduct.price}`)
})
