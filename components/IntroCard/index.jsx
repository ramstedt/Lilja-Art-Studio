import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  min-width: 30%;
  max-width: 230px;
  max-height: 500px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeaturedWork = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  gap: 1rem;
`;

export default function IntroCard({ image, altText, text }) {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <Image
            src={image}
            alt={altText}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </ImageWrapper>
        <Description>
          <div>{text}</div>
          <h2>Featured Work</h2>
          <FeaturedWork>
            <Image
              src={image}
              alt={altText}
              style={{ width: "30%", height: "150px", objectFit: "contain" }}
            />
            <Image
              src={image}
              alt={altText}
              style={{ width: "30%", height: "150px", objectFit: "contain" }}
            />
            <Image
              src={image}
              alt={altText}
              style={{ width: "30%", height: "150px", objectFit: "contain" }}
            />
          </FeaturedWork>
        </Description>
      </Wrapper>
    </>
  );
}
