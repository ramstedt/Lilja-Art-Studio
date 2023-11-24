import Image from 'next/image';
import styled from 'styled-components';
import placeholder from '@/public/images/placeholder.png';
import { GrInstagram } from 'react-icons/gr';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';

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
            <Link href={`mailto:${footer.email}`} target='_blank'>
              {footer.email}
            </Link>
            <Link href={`tel:${footer.phone}`} target='_blank'>
              {footer.phone}
            </Link>
          </div>
          <div>
            <h5>Adress</h5>
            <BlockContent blocks={footer && footer.address} />
            <Link href={footer.gmapsUrl} target='_blank'>
              Hitta hit
            </Link>
          </div>
          <div>
            <h5>Organisationsnummer</h5>
            {footer.orgnumber}
          </div>
        </Contact>
        <SocialMedia>
          <h5>Sociala medier</h5>
          <GrInstagram />
        </SocialMedia>
        <ImageWrapper>
          <Image
            src={urlFor(footer.logo).url()}
            alt='alt text'
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>
      </MaxWidth>
    </Wrapper>
  );
}
