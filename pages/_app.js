import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme';
import { client } from '@/sanity/lib/client';
import Theme from '@/components/Theme/Theme';
import Footer from '@/components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
      <Footer />
    </Theme>
  );
}

export default MyApp;
