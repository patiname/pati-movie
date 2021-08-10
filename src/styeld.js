import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}

    *{ box-sizing:border-box}

    a{
        text-decoration: none;
        color:white;
    }

    body{
        background-color: #1d1d1d;
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: -1px;
        word-break: keep-all;
        color: white;
        
    }
`;
