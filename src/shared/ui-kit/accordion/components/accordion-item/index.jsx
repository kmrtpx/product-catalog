import React, { forwardRef } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import PropTypes from 'prop-types'

export const AccordionItem = forwardRef(({ children, value }, forwardedRef) => {
  return (
      <Accordion.Item value={value} ref={forwardedRef} data-testid="accordion-item">
        {children}
      </Accordion.Item>
  )
})

AccordionItem.displayName = 'AccordionItem'

AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired
}
