import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.primary.backgroundColor.value};
    color: ${(props) => props.theme.primary.fontColor.value};
  }

h1,
h2,
h3,
h4,
h5,
h6 {
    color: ${(props) => props.theme.primary.headerColor.value};
}
a {
    color: ${(props) => props.theme.primary.linkColor.value};
}
a:hover {
    color: ${(props) => props.theme.primary.linkColorHover.value};
}
button {
    background: ${(props) => props.theme.primary.buttonColor.value};
    color: ${(props) => props.theme.primary.buttonTextColor.value};
}
button:hover {
    background: ${(props) => props.theme.primary.buttonColorHover.value};
}

.desktop-item,
.nav-links li a {
  color: ${(props) => props.theme.primary.fontColor.value}
}
  .nav-links .mobile-item {
    color: ${(props) => props.theme.primary.fontColor.value}
  }


`;

export default GlobalStyle;
