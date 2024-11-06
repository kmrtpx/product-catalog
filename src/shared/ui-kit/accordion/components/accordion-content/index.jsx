import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import classnames from 'classnames'
import styles from './index.module.scss'

export const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Content
            className={classnames(styles.accordionContent, className)}
            {...props}
            ref={forwardedRef}
        >
            <div className={styles.accordionContentText}>{children}</div>
        </Accordion.Content>
  )
)
