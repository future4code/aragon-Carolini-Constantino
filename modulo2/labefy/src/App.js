
import React from "react";
import HomePage from "./Components/HomePage";
import logo from './img/logo.jpg'
import styled from "styled-components";
import axios from "axios";

const lg = styled.logo`
  width: 10vw
`

class App extends React.Component {
  state = {
    currentPage: 'HomePage',
   
  }


  render(){

  return (
    <div>
     <img className="logo" src= {logo} alt="Logo redondo com a imagem de uma caveira rosa e azul"/>
     <HomePage />
    </div>

  );
  }
}

export default App;
