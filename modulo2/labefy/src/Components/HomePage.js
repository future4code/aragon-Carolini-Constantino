import React from "react";


class HomePage extends React.Component {
  state= {
    playlists: [],
    newPlaylistInput: "",

  }

  addNewPlaylis = () => {
    const newPlaylist = [...this.state.playlists, this.state.newPlaylistInput]
    this.setState({playlists: newPlaylist, newPlaylistInput: ""})
  }

  handleNewPlaylistInput = (event) => {
    this.setState({newPlaylistInput: event.target.value})
  }

  getPlaylists = async() => {
    try {
      const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "carolini-constantino-aragon"
        }
      })
      this.setState({ playlist: response.data})
    }
    catch (error) {
      alert("Já existe uma playlist com este nome, tente novamente!")
    }
  }

  render(){

  return (
    <div>
      <h1>Crie aqui a sua Playlist!</h1>
      <label name='Nome nova Playlist'>
        Digite aqui o nome da playlist que deseja criar:
        <input
        name="Nome nova Playlist"
        value={this.state.newPlaylistInput}
        onChange={this.handleNewPlaylistInput} />
        </label>

        
    
    </div>
  );
  }
}

export default HomePage;