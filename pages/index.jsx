import Layout from '@/components/Layout/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import Instagram from '@/components/Instagram/Instagram';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import TextblockImage from '@/components/TextblockImage/TextblockImage';

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
      <TextblockImage
        text={home && home.body}
        image={home.mainImage && urlFor(home.mainImage).url()}
        alt={home.mainImage.alt}
      />
      <h2>Det senaste från Instagram</h2>
      <Instagram />
    </Layout>
  );
}
