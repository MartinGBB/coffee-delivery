import { createGlobalStyle } from 'styled-components';

 export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px;
  }
 
  body, input, textarea, button {
    font-size: 1rem;
    font-weight: 400;
  }
 `