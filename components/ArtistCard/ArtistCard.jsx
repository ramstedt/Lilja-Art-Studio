import styled from 'styled-components';
import Image from 'next/image';
import { IoLogoInstagram } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import Modal from 'react-modal';
import { useState } from 'react';
import Link from 'next/link';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;
const About = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  background: ${(props) => props.theme.secondaryBackgroundColor.value};
  padding: 1rem;
  flex-wrap: wrap;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: 0.1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 0px;
    width: 700px;
  }
  @media only screen and (min-width: 800px) {
    width: 720px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin: auto;
  width: 270px;
  height: 370px;
  @media only screen and (min-width: 425px) {
    width: 300px;
    height: 400px;
  }

  @media only screen and (min-width: 768px) {
    width: 400px;
    height: 500px;
    margin: 0;
    grid-area: 2 / 1 / 3 / 2;
  }
`;

const TextWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    grid-area: 2 / 2 / 3 / 3;
    min-width: 300px;
  }
`;

const Contact = styled.div`
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
  @media only screen and (min-width: 1024px) {
    width: 20%;
  }
  @media only screen and (min-width: 1200px) {
    width: 25%;
  }
  @media only screen and (min-width: 1441px) {
    width: 30%;
  }
`;

const GalleryWrapper = styled.div`
  width: 100%;
`;

const Title = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

const Gallery = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const GalleryCard = styled.div`
  position: relative;
  padding: 1rem;
  width: 130px;
  height: 130px;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  border-color: #d8d8d8;
  overflow: hidden;
  img {
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media only screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  a svg {
    height: 30px;
    width: 30px;
  }
`;

const customStyles = {
  content: {
    position: 'absolute',
    zIndex: '999',
    cursor: 'pointer',
  },
};

function GalleryModal({ image }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <GalleryCard>
        <Image
          src={urlFor(image.image).url()}
          alt={image.alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes='(max-width: 300px)'
          onClick={openModal}
        />
      </GalleryCard>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel={image.alt}
        style={customStyles}
      >
        <Image
          src={urlFor(image.image).url()}
          alt={image.alt}
          fill
          style={{ objectFit: 'none' }}
          sizes='(max-width: 80vw)'
          onClick={closeModal}
        />
      </Modal>
    </div>
  );
}

export default function ArtistCard({
  portrait,
  name,
  description,
  gallery,
  email,
  phone,
  instagram,
  facebook,
  contact,
}) {
  return (
    <Wrapper>
      <About>
        <Title>
          <h1>{name}</h1>
        </Title>
        <ImageWrapper>
          <Image
            src={portrait}
            sizes='(max-width: 300px)'
            alt='alt text'
            fill
            style={{ objectFit: 'cover' }}
            priority={true}
          />
        </ImageWrapper>
        <TextWrapper>{description}</TextWrapper>
      </About>
      <Contact>
        {email || phone || facebook || instagram ? (
          <h2>Kontaktinformation</h2>
        ) : null}

        {email ? (
          <div>
            <b>Email:</b> {email}
          </div>
        ) : null}
        {phone ? (
          <div>
            <b>Telefon:</b> {phone}
          </div>
        ) : null}
        <SocialMedia>
          <div>
            {facebook ? (
              <Link href={facebook} target='_blank'>
                <IoLogoFacebook />
              </Link>
            ) : null}
          </div>
          <div>
            {instagram ? (
              <Link href={instagram} target='_blank'>
                <IoLogoInstagram />
              </Link>
            ) : null}
          </div>
        </SocialMedia>
        {contact.props.blocks ? (
          <>
            <h2>Tidsbokning</h2>
            <div>{contact}</div>
          </>
        ) : null}
      </Contact>
      <GalleryWrapper>
        {gallery === undefined || gallery.length > 0 ? null : <h2>Galleri</h2>}
        <Gallery>
          {gallery &&
            gallery.map((image, key) => (
              <GalleryModal key={key} image={image} alt={image.alt} />
            ))}
        </Gallery>
      </GalleryWrapper>
    </Wrapper>
  );
}
