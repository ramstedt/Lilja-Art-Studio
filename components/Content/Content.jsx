import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 70px 2% 2% 2%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1440px;
  margin: auto;
`;
function Content({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Content;