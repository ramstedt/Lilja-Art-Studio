import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.backgroundColor.value};
    color: ${(props) => props.theme.fontColor.value};
  }

h1,
h2,
h3,
h4,
h5,
h6 {
    color: ${(props) => props.theme.headerColor.value};
}
a {
    color: ${(props) => props.theme.linkColor.value};
}
a:hover {
    color: ${(props) => props.theme.linkColorHover.value};
}
button {
    background: ${(props) => props.theme.buttonColor.value};
    color: ${(props) => props.theme.buttonTextColor.value};
    border-color: ${(props) => props.theme.buttonTextColor.value};
}
button:hover {
    background: ${(props) => props.theme.buttonColorHover.value};
    color: ${(props) => props.theme.headerColor.value};
}

footer{
  background:${(props) => props.theme.secondaryBackgroundColor.value};
}

.desktop-item,
.nav-links li a {
  color: ${(props) => props.theme.fontColor.value}
}
.nav-links .mobile-item {
    color: ${(props) => props.theme.fontColor.value}
}


`;

export default GlobalStyle;
