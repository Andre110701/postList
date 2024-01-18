import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    -webkit-tap-highlight-color: transparent; 
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  button {
    cursor: pointer;
  }

  #__next {
    min-width: 320px;
    height: 100vh;
    width: 100vw;
  }
  #__next > div {
    min-width: 320px;
  }
`
