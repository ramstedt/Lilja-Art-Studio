import Image from 'next/image';
import styled from 'styled-components';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 275px;
  height: 180px;
  margin-top: 0;
  @media only screen and (min-width: 375px) {
    width: 325px;
    height: 230px;
  }
  @media only screen and (min-width: 425px) {
    width: 375px;
    height: 280px;
  }
  @media only screen and (min-width: 768px) {
    width: 340px;
    height: 255px;
  }
  @media only screen and (min-width: 768px) {
    width: 450px;
    height: 355px;
  }
  @media only screen and (min-width: 1440px) {
    width: 650px;
    height: 555px;
  }
`;

const Gallery = ({ images }) => {
  return (
    <Wrapper>
      {images &&
        images.map((image, key) => (
          <ImageWrapper key={key}>
            <Image
              src={image.image && urlFor(image.image).url()}
              alt={image.alt}
              fill
              style={{ objectFit: 'contain' }}
              sizes='(max-width: 300px)'
            />
          </ImageWrapper>
        ))}
    </Wrapper>
  );
};

export default Gallery;
