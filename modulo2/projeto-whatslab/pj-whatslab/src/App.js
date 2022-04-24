import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from "react";

class App extends React.Component {
  state = {
    conversa: [
      {nome: "Carol",
       mensagem: "Oi! Está dando certo?"},
       {nome: "Computador",
      mensagem:"Não sei... testa ai!"}
    ],

    inputUsuario:"",
    inputMensagem: ""
  };

novoNomeUsuario=(event)=>{
  this.setState({inputUsuario: event.target.value})
}
novaMensagem=(event)=>{
  this.setState({inputMensagem: event.target.value})
}

enviaMensagem=()=>{
  const novaMensagem={
    nome: this.state.inputUsuario,
    mensagem: this.state.inputMensagem
  };
  const todaMensagem = {...this.state.conversa, novaMensagem};
  this.setState({conversa: todaMensagem});
};


  render() {

  const listaDeConversa = this.state.conversa.map((objeto)=>{
    return (
      <p>
        {objeto.nome} - {objeto.mensagem}
      </p>
    );
  });
  return (
    <main>
      <div>
      <h1>DESAFIO</h1>
      <div className='containerConversa'>{listaDeConversa}</div>
      </div>
      <input className='campoNome'
      name='nomeUsuário'
      placeholder='Nome'
      value={this.state.inputUsuario}
      onChange={this.novoNomeUsuario} 
      />

      <input className='campoMensagem'
      name='Mensagem' 
      placeholder='Mensagem'
      value={this.state.inputMensagem}
      onChange={this.novaMensagem}
      />
     
      <button onClick={this.enviaMensagem}>Enviar</button>
      
      </main>
  )
}
}

export default App;
