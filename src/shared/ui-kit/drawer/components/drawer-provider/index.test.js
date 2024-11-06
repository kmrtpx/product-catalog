import { render, screen, fireEvent } from '@testing-library/react'
import { DrawerProvider, useDrawer } from './index'
import '@testing-library/jest-dom'

test('should open and close drawer', () => {
  const TestComponent = () => {
    const { isOpen, openDrawer, closeDrawer } = useDrawer()

    return (
            <div>
                <button onClick={openDrawer}>Open Drawer</button>
                <button onClick={closeDrawer}>Close Drawer</button>
                <div>{isOpen ? 'Drawer is open' : 'Drawer is closed'}</div>
            </div>
    )
  }

  render(
        <DrawerProvider>
            <TestComponent />
        </DrawerProvider>
  )

  expect(screen.getByText('Drawer is closed')).toBeInTheDocument()

  fireEvent.click(screen.getByText('Open Drawer'))
  expect(screen.getByText('Drawer is open')).toBeInTheDocument()

  fireEvent.click(screen.getByText('Close Drawer'))
  expect(screen.getByText('Drawer is closed')).toBeInTheDocument()
})

test('throws error when useDrawer is used outside of DrawerProvider', () => {
  const TestComponent = () => {
    useDrawer()
    return null
  }

  expect(() =>
    render(<TestComponent />)
  ).toThrow('useDrawer must be used within a DrawerProvider')
})
