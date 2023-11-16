import ArtistCard from '@/components/ArtistCard/ArtistCard';
import Layout from '@/components/Layout/Layout';
import styled from 'styled-components';

const ArtistWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;
`;

export default function Home() {
  return (
    <Layout>
      <h1>Title</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sint,
        eum culpa, ipsum aperiam voluptatem dolores aliquam delectus molestiae,
        blanditiis ratione totam et nihil labore ea quis dignissimos amet sed?
      </div>
      <ArtistWrapper>
        <ArtistCard text='lorem' />
        <ArtistCard text='lorem' />
        <ArtistCard text='lorem' />
        <ArtistCard text='lorem' />
        <ArtistCard text='lorem' />
        <ArtistCard text='lorem' />
        <ArtistCard text='lorem' />
      </ArtistWrapper>
    </Layout>
  );
}
