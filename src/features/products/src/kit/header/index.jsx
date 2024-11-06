import React from 'react';
import styles from './index.module.scss';
import {Text} from "../../../../../shared/ui-kit";

export function Header({itemsCount}) {
    return (<div className={styles.listHeader}>
        <Text variant="xl" weight={700}>All products</Text>
        <Text variant="s">[{itemsCount}]</Text>
    </div>);
}
