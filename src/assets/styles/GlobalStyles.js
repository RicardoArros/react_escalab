import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`  

  html {
    box-sizing: border-box;

    font-size: 62.5%;

    scroll-behavior: smooth;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
    
    padding: 0;
    margin: 0;
  }  

  body {    
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.text1};

    cursor: default;    
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
    
  }   

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  button {
    font-family: inherit;
    color: inherit;

    border: none;
    outline: none;
    
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:active {
      outline: none;
      border: none;
    }

  }

  input, textarea {
    width: 100%;

    padding: 1rem;
   
    border-radius: 2rem;

    &:focus {
      outline: none;
    }
  }

  textarea {
    min-height: 12rem;
  }

  input[type="text"],
  input[type="number"], 
  input[type="tel"],
  textarea {
    font-size: 1.3rem;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

`;

export default GlobalStyles;
