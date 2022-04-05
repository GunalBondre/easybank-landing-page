import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    --DarkBlue: hsl(233, 26%, 24%);
    --LimeGreen: hsl(136, 65%, 51%);
    --BrightCyan: hsl(192, 70%, 51%);

    --GrayishBlue: hsl(233, 8%, 62%);
    --LightGrayishBlue: hsl(220, 16%, 96%);
    --VeryLightGray: hsl(0, 0%, 98%);
    --White: hsl(0, 0%, 100%);
}

*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

    html {
        font-size: 62.5%;
    }
    body {   
        font-family: 'Public Sans', sans-serif;
    }
    a{
        color: var(--GrayishBlue);
        font-size: 1.4rem;
    }

    img {
        width: 100%;
    }
`;

export default GlobalStyle;
