import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { Drawer } from './shared/ui-kit'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Drawer.Provider>
            <App/>
        </Drawer.Provider>
    </React.StrictMode>
)
