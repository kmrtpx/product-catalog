import { Text } from '../../../../../shared/ui-kit'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'

export function TopBar ({ title }) {
  return (
        <div className={styles.topBar} data-testid="top-bar">
            <div className={styles.topBarTitle} data-testid="top-bar-title">
                <MixerHorizontalIcon width={24} height={24} color={'#000'} data-testid="mixer-icon" />
                <Text variant="l" data-testid="top-bar-text">{title}</Text>
            </div>
        </div>
  )
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired
}
