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

export default function Artist() {
  return (
    <Layout>
      <ArtistCard />
    </Layout>
  );
}
