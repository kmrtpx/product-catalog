import React from 'react'
import * as Slider from '@radix-ui/react-slider'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export function RangeSlider ({ min, max, step, defaultValue, onValueChange }) {
  return (
        <Slider.Root
            className={styles.rangeSlider}
            defaultValue={defaultValue}
            min={min}
            max={max}
            step={step}
            onValueChange={([min, max]) => onValueChange({ min, max })}
            data-testid="range-slider-root"
        >
            <Slider.Track className={styles.track} data-testid="range-slider-track">
                <Slider.Range className={styles.range} data-testid="range-slider-range" />
            </Slider.Track>
            <Slider.Thumb className={styles.thumb} data-testid="range-slider-thumb-1" />
            <Slider.Thumb className={styles.thumb} data-testid="range-slider-thumb-2" />
        </Slider.Root>
  )
}

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  defaultValue: PropTypes.arrayOf(PropTypes.number),
  onValueChange: PropTypes.func.isRequired
}

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: [25, 75]
}
