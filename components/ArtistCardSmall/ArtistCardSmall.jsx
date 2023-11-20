import styled from 'styled-components';
import CTAButton from '../_atoms/CTAButton/CTAButton';
import Image from 'next/image';
import placeholder from '@/public/images/placeholder.png';

const Wrapper = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: black;
  width: 300px;
  background: ${(props) => props.theme.secondary.backgroundColor.value};
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
`;

const TextWrapper = styled.div`
  padding: 1rem;
`;

const ButtonWrapper = styled.div`
  padding: 1rem;
`;

export default function ArtistCardSmall({ title, text, image, alt, slug }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={image}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes='(max-width: 300px)'
        />
      </ImageWrapper>
      <TextWrapper>
        <h3>{title}</h3>
        <p>{text}</p>
      </TextWrapper>
      <ButtonWrapper>
        <CTAButton text='Portfolio' url={slug} />
      </ButtonWrapper>
    </Wrapper>
  );
}
