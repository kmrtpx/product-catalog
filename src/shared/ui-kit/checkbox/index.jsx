import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import classnames from 'classnames'
import styles from './index.module.scss'
import { CheckIcon } from '@radix-ui/react-icons'
import { Text } from '../text'

export function Checkbox ({ checked, onCheckedChange, label, className }) {
  return <label className={styles.checkboxContainer}>
        <CheckboxPrimitive.Root
            className={classnames(styles.checkbox, className)}
            checked={checked}
            onCheckedChange={onCheckedChange}
        >
            <CheckboxPrimitive.Indicator className={styles.indicator}>
                <CheckIcon width={16} height={16}/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <Text variant="m" className={styles.label}>{label}</Text>
    </label>
}
