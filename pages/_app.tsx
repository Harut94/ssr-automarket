import '../styles/global.css'
import { AppInterface } from 'interfaces/app-interface'

export default function App({ Component, pageProps }: AppInterface) {
  return <Component {...pageProps} />
}
