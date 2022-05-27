import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Proxima+Nova');
    
    *{
        margin:0;
        padding: 0;
        background: none;
        font-family: sans-serif;
    }
`;

export default GlobalStyle;
