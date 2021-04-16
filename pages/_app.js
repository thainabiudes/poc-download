import '../styles/globals.css';
import { UserStore } from '../store/UserStore';

function MyApp({ Component, pageProps }) {
  return (
    <UserStore>
      <Component {...pageProps} />
    </UserStore>
  )
}

export default MyApp
