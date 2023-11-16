import Theme from '@/components/Theme/Theme';
import Footer from '@/components/Footer/Footer';
import GlobalStyle from '@/styles/globals';
import Hero from '@/components/Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import styled from 'styled-components';

const MaxWidth = styled.div`
  max-width: 1440px;
  margin: auto;
`;
function Layout({ children }) {
  return (
    <Theme>
      <GlobalStyle />
      <MaxWidth>
        <Hero />
        <Navbar />
        <Content>{children}</Content>
      </MaxWidth>
      <Footer />
    </Theme>
  );
}

export default Layout;
