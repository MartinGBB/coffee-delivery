import { createGlobalStyle } from 'styled-components';

 export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${({theme}) => theme['base-text']};
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px;
  }
 
  h1 {
    color: ${({theme}) => theme['base-title']};
    line-height: 130%;
    font-family: 'Baloo 2', cursive;
  }

  p {
    color: ${({theme}) => theme['base-subtitle']};
  }

  button {
    color: ${({theme}) => theme['base-button']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
 `