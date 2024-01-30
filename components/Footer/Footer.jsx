import Image from 'next/image';
import styled from 'styled-components';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';
import { IoLogoInstagram } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const Wrapper = styled.footer``;

const MaxWidth = styled.div`
  max-width: 1440px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 0.9rem;
  margin: auto;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: flex-start;
`;

const ImageWrapper = styled.div`
  margin: auto;
  position: relative;
  width: 250px;
  height: 250px;
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

const SocialMedia = styled.div`
  align-self: flex-start;
  div {
    display: flex;
    gap: 0.5rem;
  }
  a svg {
    height: 30px;
    width: 30px;
  }
`;

export default function Footer() {
  const [footer, setFooter] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "footer"]`)
      .then((data) => {
        setFooter(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  if (isLoading) return <div></div>;
  return (
    <Wrapper>
      <MaxWidth>
        <Contact>
          <div>
            <h5>Kontakt</h5>
            <BlockContent blocks={footer && footer.contact} />
          </div>
          <div>
            <h5>Adress</h5>
            <BlockContent blocks={footer && footer.address} />
            {footer.gmapsUrl ? (
              <Link href={footer.gmapsUrl} target='_blank'>
                Hitta hit
              </Link>
            ) : null}
            <br />
            <br />
          </div>
        </Contact>
        <SocialMedia>
          <h5>Sociala medier</h5>
          <div>
            {footer.instagram ? (
              <Link href={footer.instagram} target='_blank'>
                <IoLogoInstagram />
              </Link>
            ) : null}
            {footer.facebook ? (
              <Link href={footer.facebook} target='_blank'>
                <IoLogoFacebook />
              </Link>
            ) : null}
          </div>
        </SocialMedia>
        <ImageWrapper>
          <Image
            src={urlFor(footer.logo).url()}
            alt='alt text'
            fill
            style={{ objectFit: 'cover' }}
            priority={false}
            sizes='(max-width: 250px)'
          />
        </ImageWrapper>
      </MaxWidth>
    </Wrapper>
  );
}
