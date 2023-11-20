import { useRouter } from 'next/router';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import ArtistCard from '@/components/ArtistCard/ArtistCard';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function ArtistPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      const query = `*[_type == "artists" && slug.current == $slug][0]`;
      client
        .fetch(query, { slug: slug })
        .then((artistData) => {
          setArtist(artistData);
          setIsLoading(false);
          console.log(artistData);
        })
        .catch((error) => {
          console.error('Error:', error);
          setIsLoading(false);
        });
    }
  }, [slug]);

  if (isLoading) return <div></div>;
  return (
    <Layout>
      <ArtistCard
        portrait={urlFor(artist.portrait).url()}
        name={artist.name}
        description={<BlockContent blocks={artist.description} />}
      />
    </Layout>
  );
}
