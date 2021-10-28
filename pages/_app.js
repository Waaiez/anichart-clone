import 'tailwindcss/tailwind.css'
import './app.css'
import { StorageProvider, useStorage } from '../context/StorageContext'

function MyApp({ Component, pageProps }) {
  const theme = useStorage();
  return (
    <StorageProvider>
      <div className={`${theme} bg-theme-primary`}>
        <Component {...pageProps} />
      </div>
    </StorageProvider>
  )
}

export default MyApp
