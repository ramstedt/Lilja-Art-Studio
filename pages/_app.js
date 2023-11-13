import '@/styles/globals.css';
import Theme from '@/components/Theme/Theme';
import Footer from '@/components/Footer/Footer';
import GlobalStyle from '@/styles/globals';
import Hero from '@/components/Hero/Hero';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyle />
      <Hero />
      <Component {...pageProps} />
      <Footer />
    </Theme>
  );
}

export default MyApp;
