import React from 'react'
import { Button as BaseButton } from '@radix-ui/themes'
import styles from './index.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Button = ({ children, variant = 'default', size = 'medium', className, color, ...props }) => {
  return (
      <BaseButton
          className={classnames(styles.button, styles[variant], styles[size], className)}
          {...props}
          style={{ color }}
      >
        {children}
      </BaseButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  color: PropTypes.string
}
