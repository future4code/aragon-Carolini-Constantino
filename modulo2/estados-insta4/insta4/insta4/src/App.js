import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import img from './img/cat1.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Princesa'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'./img/cat1.jpg'}
        />

        <Post
          nomeUsuario={'Ivo'}
          fotoUsuario={'https://picsum.photos/50/55'}
          fotoPost={'https://picsum.photos/200/154'}
        />
      </MainContainer>
    );
  }
}

export default App;
