import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --fundo: #121212;
        --detalhes: #27272A;
        --fonte: #FFFFFF;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--fundo);
        color: var(--fonte);
        font-family: 'Inter', sans-serif;
    }
`;

export default GlobalStyle;