import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    min-height: 100vh;
    min-width: 100%;
  }

  a{
    text-decoration: none;
  }

  ul, ol, li{
    list-style: none;
  }

  input, textarea, button, select{
    font-family: Arial, Helvetica, sans-serif;
    outline: 0;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
  }

`;
