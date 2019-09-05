import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background-image: linear-gradient( 135deg, #F05F57 10%, #360940 100%);
    background-repeat:no-repeat;
    background-attachment: fixed;
  }

  body, input, button{
    font: 14px 'Roboto', sans-serif ;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
