import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 70px 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
function Content({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Content;
