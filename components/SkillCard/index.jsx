import Image from "next/image";
import styled from "styled-components";
import Oljemalningar from "../../public/assets/images/oljemalningar.png";

const Wrapper = styled.div`
  max-width: 33%;
  max-height: auto;
  display: grid;
`;

const Description = styled.div`
  background: rgba(50, 29, 36, 0.8);
  height: 30%;
  grid-row-start: 1;
  grid-column-start: 1;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
`;
export default function SkilLCard() {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <Image
            src={Oljemalningar}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </ImageWrapper>
        <Description>
          <div>Oljemålningar</div>
        </Description>
      </Wrapper>
    </>
  );
}
