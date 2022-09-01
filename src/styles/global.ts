import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  html {
    @media (max-width: 1024px) {
        font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']};
    /* overflow-x: hidden; */
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px;
  }
 
  h1 {
    color: ${({ theme }) => theme['base-title']};
    line-height: 130%;
    font-family: 'Baloo 2', cursive;
  }

  p {
    color: ${({ theme }) => theme['base-subtitle']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
 `
