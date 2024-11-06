import styles from './index.module.scss'
import { Skeleton, Text } from '../../../../../../../shared/ui-kit'
import { StarFilledIcon } from '@radix-ui/react-icons'
import PropTypes from 'prop-types'

export function ProductCard ({ product, loading }) {
  return (
      <div className={styles.card} data-testid="product-card">
        {loading
          ? (
            <Skeleton data-testid="loading-skeleton" />
            )
          : (
            <>
              <div className={styles.cardImageContainer} data-testid="image-container">
                <img
                    src={product.imageUrl}
                    alt={`${product.name} image`}
                    className={styles.cardImage}
                    data-testid="product-image"
                />
              </div>

              <div className={styles.cardDetails} data-testid="card-details">
                <div className={styles.cardHeader} data-testid="card-header">
                  <Text variant="s" weight="700" data-testid="product-name">
                    {product.name}
                  </Text>
                  <div className={styles.rating} data-testid="rating">
                    <Text variant="s" data-testid="product-rating">
                      {product.rating}
                    </Text>
                    <StarFilledIcon width={16} height={16} color="#FFD700" data-testid="star-icon" />
                  </div>
                </div>

                <div className={styles.cardInfo} data-testid="card-info">
                  <Text variant="s" data-testid="product-brand">{product.brand}</Text>
                  <Text variant="s" data-testid="product-category">{product.category}</Text>
                  <Text variant="s" data-testid="product-price">${product.price}</Text>
                </div>
              </div>
            </>
            )}
      </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  loading: PropTypes.bool.isRequired
}
