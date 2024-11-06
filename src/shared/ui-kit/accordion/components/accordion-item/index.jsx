import React, { forwardRef } from 'react'
import * as Accordion from '@radix-ui/react-accordion'

export const AccordionItem = forwardRef(({ children, value }, forwardedRef) => {
  return <Accordion.Item value={value} ref={forwardedRef}>
        {children}
    </Accordion.Item>
})
