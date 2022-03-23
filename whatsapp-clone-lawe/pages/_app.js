import { ChatProvider } from '../components/context/ChatContext'
import '../styles/globals.css'
// import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {

  return(
    <ChatProvider>
      <Component {...pageProps} />

    </ChatProvider>
  )
}

export default MyApp
