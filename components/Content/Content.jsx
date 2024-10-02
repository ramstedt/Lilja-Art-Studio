import styled from "styled-components";

const Wrapper = styled.div`
  padding: 70px 2% 2% 2%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: auto;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
function Content({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Content;
