import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../src/components/Layout/Layout';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>

  )
}

export default MyApp