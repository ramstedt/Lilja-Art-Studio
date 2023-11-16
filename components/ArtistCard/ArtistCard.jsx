import styled from 'styled-components';
import CTAButton from '../_atoms/CTAButton/CTAButton';
import Image from 'next/image';
import placeholder from '@/public/images/placeholder.png';
import { GrInstagram } from 'react-icons/gr';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const About = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  background: ${(props) => props.theme.secondary.backgroundColor.value};
  padding: 1rem;
  max-width: 720px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    max-width: 400px;
  }
  position: relative;
  width: 100%;
  height: 360px;
`;

const TextWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    max-width: 60%;
  }
`;

const Contact = styled.div`
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 20%;
  }
`;

const GalleryWrapper = styled.div`
  width: 100%;
`;

const Gallery = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-around;
  @media only screen and (min-width: 768px) {
  }
`;

const GalleryCard = styled.div`
  position: relative;
  padding: 1rem;
  width: 130px;
  height: 130px;
  @media only screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export default function ArtistCard() {
  return (
    <Wrapper>
      <About>
        <ImageWrapper>
          <Image
            src={placeholder}
            alt='alt text'
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>
        <TextWrapper>
          <h1>Karin</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            fugiat esse ex. Voluptatem odio minus ratione at earum suscipit id
            nulla quia, sunt ipsam, voluptatibus architecto enim cumque placeat
            eum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam laboriosam ad sunt incidunt unde amet adipisci possimus,
            vitae doloremque, earum veritatis voluptatum! Ipsa eum officia
            voluptatem sed, sint atque illo repellendus, earum aliquam inventore
            fugit sunt! Nisi quisquam, earum libero cum ipsa, ducimus magnam
            nemo cumque quam voluptas aliquam dolores. Numquam asperiores est
            aperiam repudiandae laborum sequi cumque dolore perspiciatis!
          </p>
        </TextWrapper>
        {/* <ButtonWrapper>
        <CTAButton text='Kontakt' />
      </ButtonWrapper> */}
      </About>
      <Contact>
        <h2>Kontaktinformation</h2>
        <p>Email: placeholder@placeholder.se</p>

        <GrInstagram />
      </Contact>
      <GalleryWrapper>
        <h2>Galleri</h2>
        <Gallery>
          <GalleryCard>
            <Image
              src={placeholder}
              alt='alt text'
              fill
              style={{ objectFit: 'cover' }}
            />
          </GalleryCard>
          <GalleryCard>
            <Image
              src={placeholder}
              alt='alt text'
              fill
              style={{ objectFit: 'cover' }}
            />
          </GalleryCard>
          <GalleryCard>
            <Image
              src={placeholder}
              alt='alt text'
              fill
              style={{ objectFit: 'cover' }}
            />
          </GalleryCard>
          <GalleryCard>
            <Image
              src={placeholder}
              alt='alt text'
              fill
              style={{ objectFit: 'cover' }}
            />
          </GalleryCard>
          <GalleryCard>
            <Image
              src={placeholder}
              alt='alt text'
              fill
              style={{ objectFit: 'cover' }}
            />
          </GalleryCard>
          <GalleryCard>
            <Image
              src={placeholder}
              alt='alt text'
              fill
              style={{ objectFit: 'cover' }}
            />
          </GalleryCard>
          <GalleryCard>
            <Image
              src={placeholder}
              alt='alt text'
              fill
              style={{ objectFit: 'cover' }}
            />
          </GalleryCard>
          <GalleryCard>
            <Image
              src={placeholder}
              alt='alt text'
              fill
              style={{ objectFit: 'cover' }}
            />
          </GalleryCard>
          <GalleryCard>
            <Image
              src={placeholder}
              alt='alt text'
              fill
              style={{ objectFit: 'cover' }}
            />
          </GalleryCard>
          <GalleryCard>
            <Image
              src={placeholder}
              alt='alt text'
              fill
              style={{ objectFit: 'cover' }}
            />
          </GalleryCard>
        </Gallery>
      </GalleryWrapper>
    </Wrapper>
  );
}
