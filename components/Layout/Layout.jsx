import Theme from '@/components/Theme/Theme';
import Footer from '@/components/Footer/Footer';
import GlobalStyle from '@/styles/globals';
import Hero from '@/components/Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import Head from 'next/head';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

function Layout({ children }) {
  const [metadata, setMetadata] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "meta"]`)
      .then((data) => {
        setMetadata(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  if (isLoading) return <div></div>;
  return (
    <Theme>
      <Head>
        <link rel='canonical' href='https://lilja-art-studio.vercel.app' />
        <title>Lilja Art Studio</title>
        {/* <link
          rel='icon'
          href={urlFor(metadata.favicon).url()}
          type='image/x-icon'
        /> */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta name='robots' content='index, follow' />
      </Head>
      <GlobalStyle />
      <Hero />
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Theme>
  );
}

export default Layout;
