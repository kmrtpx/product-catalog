import React, { forwardRef } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export const AccordionContent = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Content
            className={classnames(styles.accordionContent, className)}
            data-testid="accordion-content"
            {...props}
            ref={forwardedRef}
        >
            <div className={styles.accordionContentText}>{children}</div>
        </Accordion.Content>
  )
)

AccordionContent.displayName = 'AccordionContent'

AccordionContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

AccordionContent.defaultProps = {
  className: ''
}
