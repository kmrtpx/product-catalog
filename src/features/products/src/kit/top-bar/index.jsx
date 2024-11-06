import {Text} from "../../../../../shared/ui-kit";
import styles from './index.module.scss'
import {MixerHorizontalIcon} from "@radix-ui/react-icons"

export function TopBar() {
    return <div className={styles.topBar}>
        <div className={styles.topBarTitle}>
            <MixerHorizontalIcon width={24} height={24} color={"#000"}/>
            <Text variant="l">Filters & Sort</Text>
        </div>
    </div>
}
