import Image from 'next/image';
import styled from 'styled-components';
import placeholder from '@/public/images/placeholder.png';
import { GrInstagram } from 'react-icons/gr';

const Wrapper = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 0.9rem;
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
  height: 150px;
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

const SocialMedia = styled.div`
  align-self: flex-start;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Contact>
        <div>
          <h5>Kontakt</h5>
          karin@email.se
        </div>
        <div>
          <h5>Adress</h5>
          Gatuvägen 45 <br />
          113 43 Mölndal
        </div>
        <div>
          <h5>Organisationsnummer</h5>
          000 - 000000
        </div>
      </Contact>
      <SocialMedia>
        <h5>Sociala medier</h5>
        <GrInstagram />
      </SocialMedia>
      <ImageWrapper>
        <Image
          src={placeholder}
          alt='alt text'
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageWrapper>
    </Wrapper>
  );
}
