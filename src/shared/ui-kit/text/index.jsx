import React from 'react'
import { Text as BaseText } from '@radix-ui/themes'
import styles from './index.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Text = ({
  as = 'span',
  variant = 'default',
  color,
  weight,
  children,
  className,
  ...props
}) => {
  return (
        <BaseText
            as={as}
            className={classnames(styles.text, styles[variant], className)}
            style={{ color, fontWeight: weight }}
            {...props}
        >
            {children}
        </BaseText>
  )
}

Text.propTypes = {
  as: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
