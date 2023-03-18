import "../styles/globals.css";
import Head from "next/head";
import Hero from "../components/Hero";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lilja Art Studio</title>
        <meta
          name="description"
          content="Lilja Art Studio ägs av Karin Lilja som är utbildad konstnär och tatuerare. Tjänster som erbjuds är bland annat tatueringar (custom och flashar), oljemålningar och illustrationer på beställning."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
