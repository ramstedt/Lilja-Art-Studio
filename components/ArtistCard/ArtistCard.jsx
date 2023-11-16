import styled from 'styled-components';
import CTAButton from '../_atoms/CTAButton/CTAButton';
import Image from 'next/image';
import placeholder from '@/public/images/placeholder.png';

const Wrapper = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: black;
  max-width: 300px;
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

export default function ArtistCard({ text }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={placeholder}
          alt='alt text'
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageWrapper>
      <TextWrapper>
        <h3>Karin</h3>
        <p>Tatuerare med specialisering i det ena och det andra</p>
      </TextWrapper>
      <ButtonWrapper>
        <CTAButton text='Portfolio' />
      </ButtonWrapper>
    </Wrapper>
  );
}
