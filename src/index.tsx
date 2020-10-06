import "react-app-polyfill/ie9"
import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import React from "react"
import ReactDOM from "react-dom"
import Main from "./components/pages/main"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: Exo2;
    font-style: normal;
    font-weight: 100;
    src: url("${process.env.PUBLIC_URL}/fonts/Exo2.0-Thin.otf") format("otf");
  }

  * {
    box-sizing: border-box;
  }

`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>,
  document.querySelector("#root"),
)
