import styled from 'styled-components';
import CTAButton from '../_atoms/CTAButton/CTAButton';
import Image from 'next/image';
import placeholder from '@/public/images/placeholder.png';
import { GrInstagram } from 'react-icons/gr';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

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
  width: 100%;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 720px;
  }
`;

const ImageWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    width: 400px;
    height: 500px;
  }
  position: relative;

  width: 300px;
  height: 450px;
`;

const TextWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    width: 60%;
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

export default function ArtistCard({ portrait, name, description }) {
  return (
    <Wrapper>
      <About>
        <ImageWrapper>
          <Image
            src={portrait}
            sizes='(max-width: 300px)'
            alt='alt text'
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>
        <TextWrapper>
          <h1>{name}</h1>
          {description}
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
          <GalleryCard></GalleryCard>
        </Gallery>
      </GalleryWrapper>
    </Wrapper>
  );
}
