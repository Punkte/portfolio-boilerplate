import { createGlobalStyle } from "styled-components"
import Columbia from './columbia-serial-bold.ttf'
import Circe from './Circe.woff2'
import CirceThin from './CirceThin.woff2'
import CirceBold from './CirceBold.woff2'

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: "Circe";
    src: url(${Circe}) format("woff2");
  }
  @font-face {
    font-family: "Circe Bold";
    src: url(${CirceBold}) format("woff2");
  }
  @font-face {
    font-family: "Circe Thin";
    src: url(${CirceThin}) format("woff2");
  }

  @font-face {
    font-family: 'Serial-Bold';
    /* src: url('https://lucid-perlman-1edc61.netlify.app/columbia-serial-bold.ttf'); */
    src: url(${Columbia});
  }
`

export default GlobalFont