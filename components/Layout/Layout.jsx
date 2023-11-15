import Theme from '@/components/Theme/Theme';
import Footer from '@/components/Footer/Footer';
import GlobalStyle from '@/styles/globals';
import Hero from '@/components/Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';

function Layout({ children }) {
  return (
    <Theme>
      <GlobalStyle />
      <Hero />
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Theme>
  );
}

export default Layout;
