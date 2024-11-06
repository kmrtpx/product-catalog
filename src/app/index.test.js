import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { App } from './index'
import '@testing-library/jest-dom'

test('Render app component', () => {
  render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
  )

  const headerTitle = screen.getByText('Products')
  expect(headerTitle).toBeInTheDocument()
})
