import '@fontsource/quicksand/400.css'
import '@fontsource/quicksand/variable.css'
import '@fontsource/inconsolata/400.css'
import '@fontsource/inconsolata/variable.css'
import '@fontsource/museomoderno/400.css'
import '@fontsource/museomoderno/variable.css'
import '../styles/globals.css'
import '../styles/markdown.css'

import type {AppProps} from 'next/app'

const MyApp = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
