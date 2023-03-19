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
      <main>
        <Component {...pageProps} />
      </main>
      <div>
        <footer>
          <h2>Instagram</h2>
          <figure data-behold-id="VfptWwR0XKKcjP0582hH"></figure>
          <script src="https://w.behold.so/widget.js" type="module"></script>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
