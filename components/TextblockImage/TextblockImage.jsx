import Image from 'next/image';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const Wrapper = styled.div`
  background: ${(props) => props.theme.secondaryBackgroundColor.value};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Text = styled.div`
  @media only screen and (min-width: 768px) {
    max-width: 45%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 0;
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 300px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 350px;
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
    height: 520px;
  }
`;

const TextblockImage = ({ text, image, alt }) => {
  return (
    <Wrapper>
      <Text>
        <BlockContent blocks={text} />
      </Text>
      <ImageWrapper>
        <Image
          src={image}
          alt={alt}
          fill
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 300px)'
          priority={true}
        />
      </ImageWrapper>
    </Wrapper>
  );
};

export default TextblockImage;
