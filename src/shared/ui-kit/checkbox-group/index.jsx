import React, { useState } from 'react'
import styles from './index.module.scss'
import { Checkbox } from '../checkbox'
import PropTypes from 'prop-types'

export function CheckboxGroup ({ options, onChange, initialValue }) {
  const [selectedOption, setSelectedOption] = useState(initialValue)

  const handleCheckboxChange = (option) => {
    const newSelectedOption = selectedOption === option ? null : option
    setSelectedOption(newSelectedOption)
    onChange(newSelectedOption)
  }

  return (
        <div className={styles.checkboxGroup}>
            {options.map((option) => (
                <Checkbox
                    key={option}
                    label={option}
                    checked={selectedOption === option}
                    onCheckedChange={() => handleCheckboxChange(option)}
                />
            ))}
        </div>
  )
}

CheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  initialValue: PropTypes.string
}
