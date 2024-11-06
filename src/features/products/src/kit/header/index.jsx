import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Text } from '../../../../../shared/ui-kit'

export function Header ({ itemsCount }) {
  return (
        <div className={styles.listHeader} data-testid="header">
            <Text variant="xl" weight={700} data-testid="header-title">All products</Text>
            <Text variant="s" data-testid="header-count">[{itemsCount}]</Text>
        </div>
  )
}

Header.propTypes = {
  itemsCount: PropTypes.number.isRequired
}
