import { DrawerProvider, useDrawer } from './components/drawer-provider'
import { DrawerRoot } from './components/drawer-root'

export const Drawer = Object.assign(DrawerRoot, {
  Provider: DrawerProvider,
  useDrawer
})
