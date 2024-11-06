import { DrawerProvider, useDrawer } from './drawer-provider'
import { DrawerRoot } from './drawer-root'

export const Drawer = Object.assign(DrawerRoot, {
  Provider: DrawerProvider,
  useDrawer
})
