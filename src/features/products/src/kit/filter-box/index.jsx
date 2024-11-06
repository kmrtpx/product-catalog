import React from "react";
import styles from './index.module.scss'
import {FilterForm} from "../filter-form";

export function FilterBox(props) {
    return <div className={styles.filterBox}>
        <FilterForm {...props}/>
    </div>
}
