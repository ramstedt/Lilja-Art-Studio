import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  max-width: 30%;
`;

const Description = styled.div`
  max-width: 40%;
`;
export default function IntroCard({ image, altText, text }) {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <Image
            src={image}
            alt={altText}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </ImageWrapper>
        <Description>
          <div>{text}</div>
        </Description>
      </Wrapper>
    </>
  );
}
