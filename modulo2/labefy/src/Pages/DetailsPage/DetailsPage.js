import React from "react";
import axios from "axios";
import {cardDetails} from "./styled"

const authorization = {
  headers: {
    Authorization: "carolini-constantino-aragon"
  }
}

export default class DetailsPage extends React.Component {
  state={
    musics: [],
    musicName: "",
    artist: "",
    url:""
  }

  componentDidMount = () => {
    this.getPlaylistTracks()
  }

  getPlaylistTracks = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`
    axios
    .get (url, authorization)
    .then((resp) => {
      this.setState({ musics: resp.data.result.tracks })
    })
    .catch((err) => {
      alert(`Erro no sistema, tente novamente!`)
    })
  }

  delTrack = (trackId) => {
    if (window.confirm ("Tem certeza que deseja excluir a música?")){
      axios
      .delete (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${trackId}`, authorization)
      .then((res) => {
        alert (`Tente novamente!`)
      })
    }
  }

  changeInputValues = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addTrack = (e) => {
    e.preventDefault()
    const body = {
      name: this.state.musicName,
      artist: this.state.artist,
      url: this.state.url
    }
    axios
   .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
    body, authorization)
    .then(() => {
      this.getPlaylistTracks()
    })
    .catch((err) => {
      alert(`Sua música não foi adicionada, tente novamente"`)
    })
    this.setState({
      name: "",
      artist: "",
      url: ""
    })
  }
  render() {
    const musics = this.state.musics.map((music) => {
      return (
        <p key={music.id}
        musicName = {music.name}
        artist = {music.artist}
        url = {music.url}
        delTrack = {this.delTrack}/>
      )
    })

    return (
      <div>
        <cardDetails>
        <form onSubmit={this.addTrack}>
          <div>
            <label>Nome da música:</label>
            <input
            placeholder="Nome da música"
            name="Nome da música"
            value={this.state.musicName}
            onChange={this.changeInputValues}
            />
            </div>
            <div>
            <label>Artista:</label>
            <input
            placeholder="Nome de artista"
            name="Nome de artista"
            value={this.state.artist}
            onChange={this.changeInputValues}
            />
            </div>
            <div>
            <label>URL:</label>
            <input
            placeholder="URL"
            name="URL"
            value={this.state.url}
            onChange={this.changeInputValues}
            />
            </div>
            <button type="submit">Adicionar Música</button>
            </form>
            {musics}
            </cardDetails>
            <button
            onClick={() => this.props.selectPage("playlist", "")}>
          Voltar para Página inicial</button>
          
        </div>
    )
  }
}