import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export function AccordionRoot ({ children, defaultValue }) {
  return (
      <Accordion.Root
          className={styles.accordionRoot}
          type="multiple"
          defaultValue={defaultValue}
          data-testid="accordion-root"
      >
        {children}
      </Accordion.Root>
  )
}

AccordionRoot.displayName = 'AccordionRoot'

AccordionRoot.propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.string
}
