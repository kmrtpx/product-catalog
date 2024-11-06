import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import classnames from 'classnames'
import styles from './index.module.scss'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Header className={styles.accordionHeader}>
            <Accordion.Trigger
                className={classnames(styles.accordionTrigger, className)}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <div className={styles.iconContainer}>
                    <ChevronDownIcon className={styles.accordionChevron} aria-hidden/>
                </div>
            </Accordion.Trigger>
        </Accordion.Header>
  )
)
