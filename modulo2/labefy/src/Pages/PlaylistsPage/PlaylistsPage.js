import React from "react";
import axios from "axios";
import { PlaylistCard } from "./styled";
import {Title} from "./styled";
import {Body} from "./styled";
import {List} from "./styled";
import {input} from "./styled";

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

  playlistDel = async(id) => {
    try{
      const response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, 
      {
        headers: {
          Authorization: "carolini-constantino-aragon"
        }
      })
      alert ("Playlist deletada com sucesso!")
      this.getPlaylists()
    }
    catch (error) {
      alert ("Ocorreu um erro, tente novamente.")
    }
  }

  render(){
    const playlistList = this.state.playlistsList.map((playlist) => {
        return (
        <PlaylistCard
            key={playlist.id}
            onClick={() => this.props.goToDetailsPage(playlist.id)}
        >
            {playlist.name}
         <button onClick={() => this.playlistDel(playlist.id)}>Deletar</button>
         </PlaylistCard>
         )
    })
    
    return <div>
      <Title>Bem vindo à Loufy!</Title>
      <Body>
        <label name='Nome nova Playlist'>Digite aqui o nome da playlist que deseja criar:
        <input 
          name="Nome nova Playlist"
          placeholder="Escreva aqui"
          type="text"
          value={this.state.newPlaylistInput}
          onChange={this.handleNewPlaylistInput}/>
      </label>
    <button onClick={this.createPlaylist}>Criar</button>
    </Body>
    
    <List>{playlistList}</List>
   </div>
  }}
