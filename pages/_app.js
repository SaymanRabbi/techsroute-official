import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Provider } from 'react-redux'
// import store from '../src/app/store'
// store={store}
config.autoAddCss = false
export default function App({ Component, pageProps }) {
  return <Provider >
    <Component {...pageProps} />
  </Provider>
}
