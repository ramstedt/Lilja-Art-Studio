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
    grid-row-start: 1;
    grid-column-start: 1;
    padding: 0 1em 0 1em;
  }
`;

const Line = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  height: 3px;
  background-color: #d5cac4;
  border-radius: 40%;
  margin: 2% 0 2% 0;
`;

const Subtitle = styled.div`
  grid-row-start: 3;
  grid-column-start: 1;
`;

const Oval = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  width: 3.5%;
  height: 100%;
  background-color: #d5cac4;
  justify-self: center;
  border-radius: 100%;
`;

export default function HeroCard() {
  return (
    <div>
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
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { duration: 1.5 },
            default: { ease: "linear" },
          }}
          initial={{ opacity: 0, y: 10 }}
        >
          Lilja Art Studio
        </motion.h1>

        <Line />
        <Oval />
        <Subtitle>
          {/* animate={{ y: 40, opacity: 1 }} */}
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { duration: 1.5 },
              default: { ease: "linear" },
            }}
            initial={{ opacity: 0, y: -10 }}
            style={{ margin: "0", lineHeight: "0.8" }}
          >
            Tatuerare och konstnär i Göteborg
          </motion.p>
        </Subtitle>
      </Studio>
    </div>
  );
}
