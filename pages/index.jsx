import Layout from '@/components/Layout/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import Instagram from '@/components/Instagram/Instagram';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';

const Main = styled.div`
  background: ${(props) => props.theme.secondaryBackgroundColor.value};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainText = styled.div`
  @media only screen and (min-width: 768px) {
    max-width: 45%;
  }
`;

const MainImage = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin-top: 0;
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 300px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 350px;
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
    height: 520px;
  }
`;

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {
  const [home, setHome] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(`*[_type == "home"]`)
      .then((data) => {
        setHome(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (isLoading) return <div></div>;
  return (
    <Layout>
      <h1>{home.title}</h1>
      <Main>
        <MainText>
          <BlockContent blocks={home && home.body} />
        </MainText>
        <MainImage>
          <Image
            src={home.mainImage && urlFor(home.mainImage).url()}
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
