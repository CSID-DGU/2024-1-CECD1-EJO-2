import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    //font-family: 'NanumSquareRound';
    //src: url($) format('woff2');
    font-weight: normal;
    font-style: normal;
  } 

  html {
    font-size: 16px;
    overflow-x: hidden;
  }

  body {
    //font-family: 'NanumSquareRound';
    font-weight: 400;
    margin: 0;
    padding: 0;
    font-size: 16px;
    background-color: #ffffff;
  }

  #content {
    position: relative;
    height: 100%;
    overflow: auto;
    z-index: 1;
  }
`;
