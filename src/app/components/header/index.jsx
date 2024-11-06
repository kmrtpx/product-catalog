import { NavLink } from 'react-router-dom'
import { Text } from '../../../shared/ui-kit'
import styles from './index.module.scss'

export function Header () {
  return (<header className={styles.header}>
        <NavLink to="/products" className={styles.linkButton}>
            <Text variant="l" color="#FFFFFF">Products</Text>
        </NavLink>
    </header>)
}
