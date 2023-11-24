import Layout from '@/components/Layout/Layout';
import styled from 'styled-components';
import placeholder from '@/public/images/placeholder.png';
import Image from 'next/image';
import Instagram from '@/components/Instagram/Instagram';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainText = styled.div`
  @media only screen and (min-width: 768px) {
    max-width: 60%;
  }
`;

const MainImage = styled.div`
  position: relative;
  width: auto;
  height: 300px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export default function Home() {
  return (
    <Layout>
      <h1>Tatuera är en konst</h1>
      <Main>
        <MainText>
          Välkomen till Studion Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Cumque amet officiis sed illo debitis magni quia
          vero tenetur veritatis ad, sit repellendus. Soluta voluptate rerum
          dolores maiores amet fuga officia dicta quidem a perferendis? Iure eos
          minus explicabo expedita maxime aspernatur quidem doloremque. Quasi
          eligendi tempora reprehenderit aliquam aspernatur necessitatibus
          veniam magnam sapiente aliquid dolores, repudiandae consectetur,
          molestiae consequuntur! Iusto doloremque quisquam ullam labore
          repellat minus.
        </MainText>
        <MainImage>
          <Image
            src={placeholder}
            alt='alt text'
            fill
            style={{ objectFit: 'contain' }}
            sizes='(max-width: 300px)'
          />
        </MainImage>
      </Main>
      <h2>Det senaste från Instagram</h2>
      <Instagram />
    </Layout>
  );
}
