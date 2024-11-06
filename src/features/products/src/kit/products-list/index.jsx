import { ProductCard } from './components/product-card'
import styles from './index.module.scss'
import { Text } from '../../../../../shared/ui-kit'
import React from 'react'
import PropTypes from 'prop-types'

export function ProductsList ({ products, loading }) {
  if (!products?.length) {
    return (
            <div className={styles.emptyBox} data-testid="empty-box">
                <Text variant="l" data-testid="empty-text">
                    Products Not Found
                </Text>
            </div>
    )
  }

  return (
        <div className={styles.list} data-testid="product-list">
            {products.map(product => (
                <ProductCard product={product} key={product.id} loading={loading} data-testid="product-card" />
            ))}
        </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ),
  loading: PropTypes.bool
}

ProductsList.defaultProps = {
  products: [],
  loading: false
}
