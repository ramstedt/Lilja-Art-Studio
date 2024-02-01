import Layout from '@/components/Layout/Layout';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import TextblockImage from '@/components/TextblockImage/TextblockImage';
import Gallery from '@/components/Gallery/Gallery';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Studio() {
  const [studio, setStudio] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(`*[_type == "studio"]`)
      .then((data) => {
        setStudio(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (isLoading) return <div></div>;
  return (
    <Layout>
      <h1>{studio.title}</h1>
      <TextblockImage
        text={studio && studio.body}
        image={studio.mainImage && urlFor(studio.mainImage).url()}
        alt={studio.mainImage.alt}
      />
      <Gallery images={studio.gallery} />
    </Layout>
  );
}
