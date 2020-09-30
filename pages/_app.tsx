import { ThemeContainer } from "../contexts/theme/ThemeContainer"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {  
  return (
    <ThemeContainer>
      <Head>
        <title>Resulka Consultas</title>
      </Head>
      <Component {...pageProps} />
    </ThemeContainer>
  );
};

export default MyApp
