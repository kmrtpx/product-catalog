import { render, screen, waitFor } from '@testing-library/react'
import { FilterForm } from './index'
import { loadProductsFiltersFields } from '../../../../../app/components/main/api'

jest.mock('../../../../../app/components/main/api')

describe('FilterForm', () => {
  it('renders loading state initially', () => {
    render(<FilterForm updateFilterValue={() => {}} initialValue={{}} />)
    expect(screen.getByTestId('loading-message')).toBeInTheDocument()
  })

  it('renders error message when there is an error', async () => {
    loadProductsFiltersFields.mockImplementationOnce((_, setError) => {
      setError({ message: 'Failed to load filters' })
    })
    render(<FilterForm updateFilterValue={() => {}} initialValue={{}} />)
    await waitFor(() => expect(screen.getByTestId('error-message')).toHaveTextContent('Error: Failed to load filters'))
  })

  it('renders filter options when loaded', async () => {
    loadProductsFiltersFields.mockImplementationOnce((setFilterOptions) => {
      setFilterOptions([{ field: 'color', label: 'Color', content: <div>Color Options</div> }])
    })
    render(<FilterForm updateFilterValue={() => {}} initialValue={{}} />)
    await screen.findByTestId('filter-form')
    expect(screen.getByTestId('accordion-item-color')).toBeInTheDocument()
    expect(screen.getByTestId('accordion-trigger-color')).toHaveTextContent('Color')
    expect(screen.getByTestId('accordion-content-color')).toHaveTextContent('Color Options')
  })
})
