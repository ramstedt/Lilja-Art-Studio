import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import styled from 'styled-components';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  grid-area: 1 / 1 / 2 / 2;

  @media only screen and (min-width: 768px) {
    height: 600px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  z-index: 50;
  grid-area: 1 / 1 / 2 / 2;
`;

const Title = styled.div`
  padding: 1rem;
  font-family: 'Oswald';
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.2rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
    letter-spacing: 0.3rem;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 5rem;
  }
`;

const Subtext = styled.div`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 2rem;
  }
`;

const Accent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  width: 100%;
  height: 5%;
  justify-content: space-between;
  align-items: center;

  hr {
    border: 0;
    background: ${(props) => props.theme.fontColor.value};
    height: 1px;
    width: 47%;
    align-items: center;
  }

  div {
    width: 8px;
    height: 15px;
    border-radius: 50%;
    background: ${(props) => props.theme.fontColor.value};
  }

  @media only screen and (min-width: 768px) {
    hr {
      width: 47%;
    }

    div {
      width: 13px;
      height: 20px;
    }
  }
`;

const Hero = () => {
  const [hero, setHero] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "hero"]`)
      .then((data) => {
        setHero(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  if (isLoading) return <div></div>;
  return (
    <Wrapper>
      <TextWrapper>
        <Title>
          {hero.title}
          <Accent>
            <hr />
            <div></div>
            <hr />
          </Accent>
          <Subtext>Tatuerare och konstnär i Mölndal</Subtext>
        </Title>
      </TextWrapper>
      <ImageWrapper>
        <Image
          src={urlFor(hero.image).url()}
          alt={hero.image.alt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Hero;
