import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }

    html, body {
        background-color: rgba(250, 250, 250);
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;