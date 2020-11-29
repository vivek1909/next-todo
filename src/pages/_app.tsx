import { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, theme, Container } from "@chakra-ui/react";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>AffordMed Todo</title>
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
