import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 70px;
`;
function Content({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Content;
