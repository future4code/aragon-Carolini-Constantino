import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import FimFormulario from "./components/FimFormulario";

const styledPrincipal = styled.containerPrincipal`
display: flex;
background-color: blue;
  text-align: center;
`




class App extends React.Component {

  state={
    etapa: 1
  }

  vaParaEtapaSeguinte=()=>{
    this.setState({ etapa: this.state.etapa + 1 })
  }


  renderizaEtapa =()=>{
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <FimFormulario />;
      default:
        return <FimFormulario />;
    }
  }
  render(){
    console.log(this.state.etapa)
    return(
      <div className="containerPrincipal">
        <p>Este é o app</p>
        
            {this.renderizaEtapa()}

            <button onClick={this.vaParaEtapaSeguinte}>Próxima Etapa</button>
      </div>
    )
  }
}

export default App;
