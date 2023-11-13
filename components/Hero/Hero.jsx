import { ThemeProvider } from 'styled-components';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Hero = () => {
  const [hero, setHero] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "hero"]`)
      .then((data) => {
        setHero(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  if (isLoading) return <div></div>;
  return (
    <div>
      <h1>{hero.title}</h1>
      <Image
        src={urlFor(hero.image).url()}
        alt={hero.image.alt}
        width={500}
        height={200}
      />
    </div>
  );
};

export default Hero;
