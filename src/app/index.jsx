import { AppRouter } from './providers/router'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'
import styles from './index.module.scss'

export function App () {
  return (<div className={styles.app}>
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    </div>)
}
