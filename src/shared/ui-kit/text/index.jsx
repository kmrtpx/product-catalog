import React from 'react';
import {Text as BaseText} from '@radix-ui/themes';
import styles from './index.module.scss';
import classnames from "classnames";

export const Text = ({as = 'span', variant = 'default', color, weight, children, className, ...props}) => {
    return (
        <BaseText as={as} className={classnames(styles.text, styles[variant], className)}
                  style={{color, fontWeight: weight}} {...props}>
            {children}
        </BaseText>);
};
