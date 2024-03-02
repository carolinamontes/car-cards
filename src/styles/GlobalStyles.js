import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
	  box-sizing: border-box;
  }

  img{
    max-width: 100%;
    display: block;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  body {
    margin: 0;
  }
`;
