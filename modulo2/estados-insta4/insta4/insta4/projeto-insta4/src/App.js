import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import cat1 from './img/cat1.jpg';
import cat2 from './components/img/cat2.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  inputNome: "";
  inputFotoPerfil:"";
  inputFotoPost: "";
`

class App extends React.Component {
  state={
    listaPosts: [
      {nomeUsuario: "Paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150" },

      {nomeUsuario: "Princesa",
      fotoUsuario: "cat1",
      fotoPost:"cat1"},

      {nomeUsuario:"Ivo",
      fotoUsuario:"cat2",
      fotoPost:"cat2"},
    ]
  }

  hendleInputNome = (event) => this.setState({inputNome: event.target.value});
  hendleInputFotoUsuario = (event) => this.setState({inputFotoUsuario: event.target.value});
  hendleInputFotoPost = (event) => this.setState({inputFotoPost: event.target.value});

  render() {

 let novaListaPosts = this.state.listaPosts.map((post)=>{
 
  return <Post
    nomeUsuario= {post.nomeUsuario}
    fotoUsuario= {post.fotoUsuario}
    fotoPost= {post.fotoPost}
    />;
      });
   
    return (
      <MainContainer>
        <Post
         < form onSubmit={this.onSubmitForm}>
          <label for="">
            <input 
            name="NomeRecebido"
            placeholder='Qual seu nome/'
            value={this.state.inputNome} 
            onChange={this.hendleInputNome} />,
            </label>

          <label>
           <input 
           name="FotoUsuarioRecebida" 
           placeholder='Envie aqui a sua foto de perfil' 
           value={this.state.inputFotoUsuario} 
           onChange={this.hendleInputFotoUsuario} />,
          </label>

          <label>
           <input
           name='FotoPostRecebida'
           placeholder='Envie aqui a foto para post'
           value={this.state.inputFotoPost}
           onChange={this.state.hendleInputFotoPost} />,
          </label>

           <button>Adicionar</button>
          </form>
          {this.state.listaPosts.map((post)=>{
            return <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}/>
          })}
        </MainContainer>
    );
  }
}

export default App;
