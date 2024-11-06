import { render, screen } from '@testing-library/react'
import { Header } from './index'
import '@testing-library/jest-dom'

describe('Header', () => {
  it('renders the header with correct items count', () => {
    render(<Header itemsCount={5} />)

    const headerElement = screen.getByTestId('header')
    const titleElement = screen.getByTestId('header-title')
    const countElement = screen.getByTestId('header-count')

    expect(headerElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent('All products')
    expect(countElement).toHaveTextContent('[5]')
  })
})
