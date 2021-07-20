import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html{
        font-family: 'Roboto', sans-serif;
        font-size: 10px;
        scroll-behavior: smooth;
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        h1{
            font-size: 3.5rem;
        } 
        p{
            font-size: 1.5rem;
        }
    }
`

export default GlobalStyle;