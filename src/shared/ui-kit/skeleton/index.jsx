import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

export function Skeleton () {
  return (
        <div className={styles.skeletonLoader} data-testid="skeleton-loader">
            <div className={styles.skeletonImage} data-testid="skeleton-image"></div>
            <div className={styles.container} data-testid="skeleton-container">
                <div className={classnames(styles.skeletonContainer, styles.row)} data-testid="skeleton-row">
                    <div className={classnames(styles.skeletonLine, styles.short)}></div>
                    <div className={classnames(styles.skeletonLine, styles.extraShort)}></div>
                </div>

                <div className={classnames(styles.skeletonContainer, styles.column)} data-testid="skeleton-column">
                    <div className={classnames(styles.skeletonLine, styles.medium)}></div>
                    <div className={classnames(styles.skeletonLine, styles.long)}></div>
                    <div className={classnames(styles.skeletonLine, styles.extraShort)}></div>
                </div>
            </div>
        </div>
  )
}
