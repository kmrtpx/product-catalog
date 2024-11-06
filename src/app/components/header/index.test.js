import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './index'
import '@testing-library/jest-dom'

describe('Header component', () => {
  it('renders the Products link', () => {
    render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
    )

    const linkElement = screen.getByText(/Products/i)
    expect(linkElement).toBeInTheDocument()

    const link = screen.getByRole('link', { name: /Products/i })
    expect(link).toHaveAttribute('href', '/products')
    expect(link).toHaveClass('linkButton')
  })
})
