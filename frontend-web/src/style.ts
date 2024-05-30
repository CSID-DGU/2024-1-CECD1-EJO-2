import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 16px;
    background-color: #ffffff;
    overflow-x: hidden;
  }

  #content {
    position: relative;
    height: 100%;
    overflow: auto;
    z-index: 1;
  }
`;
