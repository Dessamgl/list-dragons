import { createGlobalStyle } from 'styled-components';

// import imageDevelopers from '../assets/developers.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #D6D6D6;
    -webkit-font-font-smoothing: antialiased;
  }

  body, input, button h2 {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
