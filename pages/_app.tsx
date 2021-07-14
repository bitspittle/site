import '../styles/globals.css'
import type {AppProps} from 'next/app'

// See https://chakra-ui.com/
import {ChakraProvider} from "@chakra-ui/react"

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
