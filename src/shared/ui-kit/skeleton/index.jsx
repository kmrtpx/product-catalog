import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export function Skeleton() {
    return (
        <div className={styles.skeletonLoader}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.container}>
                <div className={classnames(styles.skeletonContainer, styles.row)}>
                    <div className={classnames(styles.skeletonLine, styles.short)}></div>
                    <div className={classnames(styles.skeletonLine, styles.extraShort)}></div>
                </div>

                <div className={classnames(styles.skeletonContainer, styles.column)}>
                    <div className={classnames(styles.skeletonLine, styles.medium)}></div>
                    <div className={classnames(styles.skeletonLine, styles.long)}></div>
                    <div className={classnames(styles.skeletonLine, styles.extraShort)}></div>
                </div>
            </div>
        </div>
    );
}
