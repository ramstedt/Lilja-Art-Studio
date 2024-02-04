import Layout from '@/components/Layout/Layout';
import styled from 'styled-components';
import Instagram from '@/components/Instagram/Instagram';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import ArtistCardSmall from '@/components/ArtistCardSmall/ArtistCardSmall';
import BlockContent from '@sanity/block-content-to-react';

const ArtistWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;
`;

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {
  const [artistPage, setArtistPage] = useState(null);
  const [artists, setArtists] = useState(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    client
      .fetch(`*[_type == "tatuerare"]`)
      .then((pageData) => {
        setArtistPage(pageData[0]);
        return client.fetch(`*[_type == "artists"]`);
      })
      .then((artistData) => {
        const sortedArtists = [...artistData].sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();

          return nameA.includes('karin')
            ? -1
            : nameB.includes('karin')
            ? 1
            : nameA.includes('gästartist')
            ? 1
            : nameB.includes('gästartist')
            ? -1
            : 0;
        });

        setArtists(sortedArtists);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (loading) return <div></div>;
  return (
    <Layout>
      <h1>{artistPage && artistPage.title}</h1>
      <div>
        <BlockContent blocks={artistPage && artistPage.body} />
      </div>
      <ArtistWrapper>
        {artists &&
          artists.map((artist, key) => {
            return (
              <ArtistCardSmall
                title={artist.name}
                text={artist.shortText}
                key={artist.slug.current + key}
                image={artist.portrait && urlFor(artist.portrait).url()}
                alt={artist.portrait.alt}
                slug={`/tatuerare/${artist.slug.current}`}
              />
            );
          })}
      </ArtistWrapper>
      <h2>Det senaste från Instagram</h2>
      Kommer snart
      {/* <Instagram /> */}
    </Layout>
  );
}
