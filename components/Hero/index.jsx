import Head from "next/head";
import Image from "next/image";
import Hero from "../../public/assets/images/hero.png";
import styled from "styled-components";

const Wrapper = styled.div`
  object-fit: contain;
  & img {
    max-width: 1000px;
    height: auto;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Studio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  height: 6px;
  width: 100%;
  background-color: #d5cac4; ;
`;

const Subtitle = styled.p`
  font-size: 48px;
  margin: 10px;
`;

export default function HeroCard() {
  return (
    <Flex>
      <Wrapper>
        <Image src={Hero} alt="two white lilies on a transparent background" />
        <Studio>
          <h1>Lilja Art Studio</h1>
          <Line />
          <Subtitle>Tatuerare och konstnär i Göteborg</Subtitle>
        </Studio>
      </Wrapper>
    </Flex>
  );
}
