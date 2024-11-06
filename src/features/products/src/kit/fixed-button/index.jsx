import React from "react";
import {Button, Text} from "../../../../../shared/ui-kit";
import styles from "./index.module.scss";

export function FixedButton({onClick, label}) {
    return <div className={styles.filterAndSortButtonContainer}>
        <Button variant="contained" size="large" onClick={onClick}>
            <Text variant="l" color="#FFFFFF">{label}</Text>
        </Button>
    </div>
}
