import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const DrawerContext = createContext(undefined)

export const DrawerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = () => {
    setIsOpen(true)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
      <DrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer }}>
        {children}
      </DrawerContext.Provider>
  )
}

DrawerProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useDrawer = () => {
  const context = useContext(DrawerContext)
  if (!context) throw new Error('useDrawer must be used within a DrawerProvider')
  return context
}
