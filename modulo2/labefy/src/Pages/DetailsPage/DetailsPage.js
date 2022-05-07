import axios from "axios";
import React from "react";

class DetailsPage extends React.Component {
  state = {
    playlistDetails: {}
  }

  componentDidMount(){
    this.getPlayListDetails()
  }

getPlayListDetails = () => {
  axios.get(this.props.url)
  .then((response) =>this.setState({playlistDetails: response.data}))
  .catch((err) => console.log(err.response))
}


  render(){
 
  return (
    <div>

    <h1>Detalhes da Playlist</h1>
    <div><p>Nome: {this.state.playlistDetails.name}</p>
    <p>Artista: {this.state.playlistDetails.artist}</p>
    <p>Vídeo: {this.state.playlistDetails.url}</p></div>
    <button onClick={this.props.gotToPlaylistsPage}>Voltar para página inicial</button>
    </div>
  );
  }
}

export default DetailsPage;