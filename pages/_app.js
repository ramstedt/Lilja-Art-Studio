 import { ThemeProvider } from 'styled-components';
 import { theme } from '@/theme';
 import { client } from '@/sanity/lib/client'
import Theme from '@/components/Theme/Theme';


 function MyApp({ Component, pageProps, theme }) {
  return (
    <Theme> <Component {...pageProps} /></Theme>

  );
 }

 export default MyApp;
