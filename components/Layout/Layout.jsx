import Theme from '@/components/Theme/Theme';
import Footer from '@/components/Footer/Footer';
import GlobalStyle from '@/styles/globals';
import Hero from '@/components/Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import Head from 'next/head';
import { client } from '@/sanity/lib/client';

function Layout({ children }) {
  return (
    <Theme>
      <Head>
        <title>Lilja Art Studio</title>
        <meta
          name='description'
          content='Våra skickliga tatuerare hjälper dig med skräddarsydda tatueringar med sagoteman, feminina stilar, botaniska motiv och neo-traditionella konstverk.'
        />
        <meta
          name='keywords'
          content='Tatuering, Konst, Göteborg, Mölndal, Kvinnliga Tatuerare, Sagotatueringar, Feminina Tatueringar, Skräddarsydda Tatueringar, Botaniska Tatueringar, Sagor, Fineline, Neo-traditionell'
        />
        <meta name='robots' content='index, follow' />
      </Head>
      <GlobalStyle />
      <Hero />
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Theme>
  );
}

export default Layout;
