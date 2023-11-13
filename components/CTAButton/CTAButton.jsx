 // components/Button.js
 import styled from 'styled-components';

 const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
 `;

 export default function CTAButton() {

    return <Button>Hej</Button>

 }
