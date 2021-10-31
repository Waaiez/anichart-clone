import '../styles/globals.css'

import { DataProvider } from '../context/DataContext'
import { StorageProvider } from '../context/StorageContext'

function MyApp({ Component, pageProps }) {
  return (
    <StorageProvider>
      <DataProvider>
        <div className={`bg-theme-primary`}>
          <Component {...pageProps} />
        </div>
      </DataProvider>
    </StorageProvider>
  )
}

export default MyApp
