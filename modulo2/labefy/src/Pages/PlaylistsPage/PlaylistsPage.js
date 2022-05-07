import React from "react";
import axios from "axios";
import { PlaylistCard } from "./styled"
import {Title} from "./styled"


export default class HomePage extends React.Component {
  state = {
    playlistsList: [],
    newPlaylistInput: "",

  }

  componentDidMount() {
    this.getPlaylists()
  }

  createNewPlaylist = () => {
    const allPlaylists = [...this.state.playlistsList, this.state.newPlaylistInput]
    this.setState({ playlistList: allPlaylists })
  }

  handleNewPlaylistInput = (event) => {
    this.setState({ newPlaylistInput: event.target.value });
  }

  getPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
         {
           headers: { Authorization: "carolini-constantino-aragon" }})
      .then((response) => this.setState({ playlistsList: response.data.result.list }))  
      .catch((error) => console.log(error.response))
    }
  

  createPlaylist = () => {
    const body = {
      name: this.state.newPlaylistInput
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "carolini-constantino-aragon"
          }
        }
      )
      .then((response) => {
        this.getPlaylists();
        this.setState({ newPlaylistInput: "" })
        
      })
      .catch((error) => {
        alert("Esta playlist já existe, tente novamente!");
      });
  };

  render() {

    const playlistList = this.state.playlistsList.map((playlist) => {
      return <PlaylistCard
       key={playlist.url}
       onClick={() => this.props.goToDetailsPage(playlist.url)}
       >
         {playlist.name}
         <button>Deletar</button>
         </PlaylistCard>
    })
    console.log(playlistList)
    return <div>
      <Title>Bem vindo à Loufy!</Title>
      <label name='Nome nova Playlist'>
        Digite aqui o nome da playlist que deseja criar:
        <input
          name="Nome nova Playlist"
          placeholder="Escreva aqui"
          type="text"
          value={this.state.newPlaylistInput}
          onChange={this.handleNewPlaylistInput} />
      </label>
    <button onClick={this.createPlaylist}>Criar</button>

    {playlistList}
    </div>

  }
}
/**/
