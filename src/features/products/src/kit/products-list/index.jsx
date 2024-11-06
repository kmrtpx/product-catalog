import {ProductCard} from "./components/product-card";
import styles from './index.module.scss'
import {Text} from "../../../../../shared/ui-kit";
import React from "react";

export function ProductsList({products, loading}) {
    if(!products?.length){
        return <div className={styles.emptyBox}>
            <Text variant="l">
                Products Not Found
        </Text>
        </div>
    }

    return <div className={styles.list}>
        {products.map(product => {
            return <ProductCard product={product} key={product.id} loading={loading}/>
        })}
    </div>
}
