import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Passion+One:wght@700&display=swap');

  * {
    box-sizing: border-box;
  }
  body {
    background:#002449;
    color: hsl(210, 100%, 14%);
    font-family: 'Oswald', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
  }


`

export default GlobalStyles;