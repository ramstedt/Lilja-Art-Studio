import Theme from '@/components/Theme/Theme'
import styled from "styled-components"

const Title = styled.h1`
color: ${props => props.theme.primary}`

  export default function Home({  }) {

      return (

    <div>
        <Title>Hello</Title>Welcome to the Home page!</div>

      );
    }
