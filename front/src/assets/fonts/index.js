import { createGlobalStyle } from "styled-components"

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: "Circe";
    src: url("//db.onlinewebfonts.com/t/0373adad7b4c1a926865084f2f8fab7f.eot");
    src: url("//db.onlinewebfonts.com/t/0373adad7b4c1a926865084f2f8fab7f.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0373adad7b4c1a926865084f2f8fab7f.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/0373adad7b4c1a926865084f2f8fab7f.woff") format("woff"), url("//db.onlinewebfonts.com/t/0373adad7b4c1a926865084f2f8fab7f.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/0373adad7b4c1a926865084f2f8fab7f.svg#Circe") format("svg");
  }
  @font-face {
    font-family: "Circe Bold";
    src: url("//db.onlinewebfonts.com/t/01dc5c14e8dd31e187d9782957818708.eot");
    src: url("//db.onlinewebfonts.com/t/01dc5c14e8dd31e187d9782957818708.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/01dc5c14e8dd31e187d9782957818708.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/01dc5c14e8dd31e187d9782957818708.woff") format("woff"), url("//db.onlinewebfonts.com/t/01dc5c14e8dd31e187d9782957818708.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/01dc5c14e8dd31e187d9782957818708.svg#Circe Bold") format("svg");
  }

  @font-face {
    font-family: "Circe Thin";
    src: url("//db.onlinewebfonts.com/t/444cd7814d5af34aae0b747096a69fed.eot");
    src: url("//db.onlinewebfonts.com/t/444cd7814d5af34aae0b747096a69fed.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/444cd7814d5af34aae0b747096a69fed.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/444cd7814d5af34aae0b747096a69fed.woff") format("woff"), url("//db.onlinewebfonts.com/t/444cd7814d5af34aae0b747096a69fed.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/444cd7814d5af34aae0b747096a69fed.svg#Circe Thin") format("svg");
  }

  @font-face {
    font-family: 'Serial-Bold';
    src: url('https://lucid-perlman-1edc61.netlify.app/columbia-serial-bold.ttf');
  }
`

export default GlobalFont