import { AppProps } from "next/app";
import { ChakraProvider, theme, Container } from "@chakra-ui/react";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
