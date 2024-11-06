import React, {useEffect, useState} from "react";
import {loadProductsFiltersFields} from "../../../../../app/components/main/api";
import {Accordion} from "../../../../../shared/ui-kit";
import {filterConfig} from "./filter-config";
import styles from './index.module.scss'

export function FilterForm({updateFilterValue, initialValue}) {
    const [filterOptions, setFilterOptions] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        loadProductsFiltersFields(setFilterOptions, setError).finally(() => setLoading(false))
    }, [])

    if (error) return <div>Error: {error.message}</div>;
    if (loading) return <div>Loading...</div>;

    return <div className={styles.formContainer}>
        <Accordion>
            {filterConfig(filterOptions, updateFilterValue, initialValue).map(({field, label, content}) => (
                <Accordion.Item key={field} value={field}>
                    <Accordion.Trigger>{label}</Accordion.Trigger>
                    <Accordion.Content>{content}</Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion>
    </div>
}
