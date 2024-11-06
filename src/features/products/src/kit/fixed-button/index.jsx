import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text } from '../../../../../shared/ui-kit'
import styles from './index.module.scss'

export function FixedButton ({ onClick, label }) {
  return (
        <div className={styles.filterAndSortButtonContainer} data-testid="fixed-button-container">
            <Button variant="contained" size="large" onClick={onClick} data-testid="fixed-button">
                <Text variant="l" color="#FFFFFF">{label}</Text>
            </Button>
        </div>
  )
}

FixedButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}
