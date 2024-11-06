import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import classnames from 'classnames'
import styles from './index.module.scss'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import PropTypes from 'prop-types'

export const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Header className={styles.accordionHeader}>
            <Accordion.Trigger
                className={classnames(styles.accordionTrigger, className)}
                {...props}
                ref={forwardedRef}
                data-testid="accordion-trigger"
            >
                {children}
                <div className={styles.iconContainer}>
                    <ChevronDownIcon className={styles.accordionChevron} aria-hidden />
                </div>
            </Accordion.Trigger>
        </Accordion.Header>
  )
)

AccordionTrigger.displayName = 'AccordionTrigger'

AccordionTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
