import styles from './index.module.scss'
import { Skeleton, Text } from '../../../../../../../shared/ui-kit'
import { StarFilledIcon } from '@radix-ui/react-icons'

export function ProductCard ({ product, loading }) {
  return (<div className={styles.card}>
        {loading
          ? <Skeleton/>
          : <>
                <div className={styles.cardImageContainer}>
                    <img
                        src={product.imageUrl}
                        alt={`${product.name} image`}
                        className={styles.cardImage}
                    />
                </div>

                <div className={styles.cardDetails}>
                    <div className={styles.cardHeader}>
                        <Text variant="s" weight="700">{product.name}</Text>
                        <div className={styles.rating}>
                            <Text variant="s">{product.rating}</Text>
                            <StarFilledIcon width={16} height={16} color="#FFD700"/>
                        </div>
                    </div>

                    <div className={styles.cardInfo}>
                        <Text variant="s">{product.brand}</Text>
                        <Text variant="s">{product.category}</Text>
                        <Text variant="s">${product.price}</Text>
                    </div>
                </div>
            </>}
    </div>)
}
