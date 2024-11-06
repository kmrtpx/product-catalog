import { render, screen, fireEvent } from '@testing-library/react'
import { DrawerRoot } from './index'
import { useDrawer } from '../drawer-provider/index'
import '@testing-library/jest-dom'

jest.mock('../drawer-provider/index')

test('renders drawer with title and close button', () => {
  useDrawer.mockReturnValue({ isOpen: true, closeDrawer: jest.fn() })

  render(
        <DrawerRoot title="Test Drawer">
            <div>Drawer content</div>
        </DrawerRoot>
  )

  expect(screen.getByText('Test Drawer')).toBeInTheDocument()
  expect(screen.getByText('Drawer content')).toBeInTheDocument()
})

test('calls closeDrawer when close button is clicked', () => {
  const closeDrawerMock = jest.fn()
  useDrawer.mockReturnValue({ isOpen: true, closeDrawer: closeDrawerMock })

  render(
        <DrawerRoot title="Test Drawer">
            <div>Drawer content</div>
        </DrawerRoot>
  )

  fireEvent.click(screen.getByRole('button'))
  expect(closeDrawerMock).toHaveBeenCalledTimes(1)
})
