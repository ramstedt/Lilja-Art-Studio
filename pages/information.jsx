import Layout from '@/components/Layout/Layout';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  div {
    flex-basis: 100%;
  }
  figure {
    display: flex;
    justify-content: center;
  }
  img {
    width: 100%;
    max-width: 300px;
  }
`;

const PricesWrapper = styled.div`
  margin: auto;
  max-width: 768px;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid black;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Information() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(`*[_type == "information"]`)
      .then((data) => {
        setData(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (isLoading) return <div></div>;
  return (
    <Layout>
      <h1>{data && data.title}</h1>
      <InformationWrapper>
        <BlockContent
          blocks={data && data.foretatuering}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        />
        <BlockContent
          blocks={data && data.skotselrad}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        />
      </InformationWrapper>

      <h2 id='priser'>Priser</h2>
      <BlockContent blocks={data && data.pricesTextAbove} />
      {data && data.prices.rows.length > 0 ? (
        <PricesWrapper>
          {data.prices.rows.map((row) => (
            <div key={row._key}>
              <div>{row.cells[0]}</div>
              <div>{row.cells[1]}</div>
            </div>
          ))}
        </PricesWrapper>
      ) : null}
      <BlockContent blocks={data && data.pricesTextBelow} />
    </Layout>
  );
}
