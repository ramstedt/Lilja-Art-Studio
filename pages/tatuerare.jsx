import ArtistCardSmall from '@/components/ArtistCardSmall/ArtistCardSmall';
import Layout from '@/components/Layout/Layout';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const ArtistWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;
`;

export default function Artists() {
  const [artistPage, setArtistPage] = useState(null);
  const [artists, setArtists] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(`*[_type == "tatuerare"]`)
      .then((pageData) => {
        setArtistPage(pageData[0]);
        return client.fetch(`*[_type == "artists"]`);
      })
      .then((artistData) => {
        setArtists(artistData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (isLoading) return <div></div>;
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
    </Layout>
  );
}
