import Theme from '@/components/Theme/Theme';
import Footer from '@/components/Footer/Footer';
import GlobalStyle from '@/styles/globals';
import Hero from '@/components/Hero/Hero';

function Layout({ children }) {
  return (
    <Theme>
      <GlobalStyle />
      <Hero />
      {children}
      <Footer />
    </Theme>
  );
}

export default Layout;
