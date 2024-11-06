import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from './index'
import '@testing-library/jest-dom'

describe('Pagination', () => {
  const onPageChangeMock = jest.fn()

  beforeEach(() => {
    onPageChangeMock.mockClear()
  })

  it('renders the correct number of page buttons', () => {
    render(<Pagination totalItems={50} itemsPerPage={10} currentPage={1} onPageChange={onPageChangeMock} />)

    const pageButtons = screen.getAllByRole('button')
    expect(pageButtons.length).toBe(7) // 5 pages + 2 buttons (Previous and Next)
  })

  it('calls onPageChange when a page button is clicked', () => {
    render(<Pagination totalItems={50} itemsPerPage={10} currentPage={1} onPageChange={onPageChangeMock} />)

    const pageButton = screen.getByText('2')
    fireEvent.click(pageButton)

    expect(onPageChangeMock).toHaveBeenCalledWith(2)
  })
})
