import { render, screen } from '@testing-library/react'
import { TopBar } from './index'
import '@testing-library/jest-dom'

test('renders top bar with title and icon', () => {
  render(<TopBar title="Filters & Sort" />)

  const topBarElement = screen.getByTestId('top-bar')
  const topBarTitleElement = screen.getByTestId('top-bar-title')
  const mixerIconElement = screen.getByTestId('mixer-icon')
  const topBarTextElement = screen.getByTestId('top-bar-text')

  expect(topBarElement).toBeInTheDocument()
  expect(topBarTitleElement).toBeInTheDocument()
  expect(mixerIconElement).toBeInTheDocument()
  expect(topBarTextElement).toHaveTextContent('Filters & Sort')
})
