import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { loadProductsFiltersFields } from '../../../../../app/components/main/api'
import { Accordion } from '../../../../../shared/ui-kit'
import { filterConfig } from './filter-config'
import styles from './index.module.scss'

export function FilterForm ({ updateFilterValue, initialValue }) {
  const [filterOptions, setFilterOptions] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadProductsFiltersFields(setFilterOptions, setError).finally(() => setLoading(false))
  }, [])

  if (error) return <div data-testid="error-message">Error: {error.message}</div>
  if (loading) return <div data-testid="loading-message">Loading...</div>

  return <div className={styles.formContainer} data-testid="filter-form">
        <Accordion>
            {filterConfig(filterOptions, updateFilterValue, initialValue).map(({ field, label, content }) => (
                <Accordion.Item key={field} value={field} data-testid={`accordion-item-${field}`}>
                    <Accordion.Trigger data-testid={`accordion-trigger-${field}`}>{label}</Accordion.Trigger>
                    <Accordion.Content data-testid={`accordion-content-${field}`}>{content}</Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion>
    </div>
}

FilterForm.propTypes = {
  updateFilterValue: PropTypes.func.isRequired,
  initialValue: PropTypes.object.isRequired
}
