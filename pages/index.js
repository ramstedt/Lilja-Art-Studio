import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.primary.headerColor.value};
`;

export default function Home({}) {
  return <div>Index</div>;
}
