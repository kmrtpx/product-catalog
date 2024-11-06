import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import styles from './index.module.scss';

export function RangeSlider({ min = 0, max = 100, step = 1, defaultValue = [25, 75], onValueChange }){
    return (
        <Slider.Root
            className={styles.rangeSlider}
            defaultValue={defaultValue}
            min={min}
            max={max}
            step={step}
            onValueChange={([min, max]) => onValueChange({min, max})}
        >
            <Slider.Track className={styles.track}>
                <Slider.Range className={styles.range} />
            </Slider.Track>
            <Slider.Thumb className={styles.thumb} />
            <Slider.Thumb className={styles.thumb} />
        </Slider.Root>
    );
}
