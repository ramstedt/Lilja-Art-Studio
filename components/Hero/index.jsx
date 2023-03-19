import Head from "next/head";
import Image from "next/image";
import Hero from "../../public/assets/images/hero.png";
import styled from "styled-components";
import { motion } from "framer-motion";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
`;

const Wrapper = styled.div`
  object-fit: contain;
  & img {
    max-width: 1000px;
    height: auto;
  }
`;

const Studio = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  & h1 {
    grid-row-start: 2;
    grid-column-start: 1;
  }
`;

const Line = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  height: 2px;
  background-color: #d5cac4;
`;

const Subtitle = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  margin: 10px;
`;

const Oval = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  width: 0.7rem;
  height: 1rem;
  background-color: #d5cac4;
  justify-self: center;
  border-radius: 100%;
`;

export default function HeroCard() {
  return (
    <>
      <Flex>
        <Wrapper>
          <Image
            src={Hero}
            alt="two white lilies on a transparent background"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Wrapper>
      </Flex>
      <Studio>
        {/* animate={{ y: -60, opacity: 1 }} */}
        <motion.h1
          animate={{ y: -20, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { duration: 1.5 },
            default: { ease: "linear" },
          }}
          initial={{ opacity: 0 }}
        >
          Lilja Art Studio
        </motion.h1>

        <Line />
        <Oval />
        <Subtitle>
          {/* animate={{ y: 40, opacity: 1 }} */}
          <motion.p
            animate={{ y: 15, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { duration: 1.5 },
              default: { ease: "linear" },
            }}
            initial={{ opacity: 0 }}
          >
            Tatuerare och konstnär i Göteborg
          </motion.p>
        </Subtitle>
      </Studio>
    </>
  );
}
