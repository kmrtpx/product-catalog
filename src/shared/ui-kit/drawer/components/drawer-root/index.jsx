import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { useDrawer } from '../drawer-provider/index'
import { Button } from '../../../button'
import { Text } from '../../../text'
import styles from './index.module.scss'
import PropTypes from 'prop-types'

export const DrawerRoot = ({ title, children }) => {
  const { isOpen, closeDrawer } = useDrawer()

  return (
        <Dialog.Root open={isOpen} onOpenChange={closeDrawer}>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.drawerOverlay} />
                <Dialog.Content className={styles.drawerContent}>
                    <div className={styles.drawerHeader}>
                        <Dialog.Title>
                            <Text variant="m">{title}</Text>
                        </Dialog.Title>
                        <Dialog.Close asChild>
                            <Button variant="iconable">
                                <Cross2Icon width={24} height={24} />
                            </Button>
                        </Dialog.Close>
                    </div>
                    <div className={styles.contentContainer}>
                        {children}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
  )
}

DrawerRoot.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
