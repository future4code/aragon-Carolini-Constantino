
import React from "react";
import logo from './img/logo.jpg';
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import PlaylistsPage from "./Pages/PlaylistsPage/PlaylistsPage";
 

class App extends React.Component {
  state = {
    currentPage: "playlists",
    clickedPlaylistId: ""
   
  }

  goToDetailsPage = (id) => {
    this.setState({currentPage: "details", clickedPlaylistId: id})
  }

  gotToPlaylistsPage = () => {
    this.setState({currentPage: "playlists", clickedPlaylistId: ""})
  }

  selectPage = () => {
    switch (this.state.currentPage) {
      case "playlists":
      return <PlaylistsPage goToDetailsPage={this.goToDetailsPage}/>
      case "details":
        return <DetailsPage gotToPlaylistsPage={this.gotToPlaylistsPage} id={this.state.clickedPlaylisId}/>
      default:
          return <PlaylistsPage goToDetailsPage={this.goToDetailsPage}/>

    }
  }
  render(){
    console.log(`ESSAAAA: ${this.selectPage}`)
  return (
    <div>
   <img className="logo" src= {logo} alt="Logo redondo com a imagem de uma caveira rosa e azul"/> 
     {this.selectPage()}
    </div>

  );
  }
}

export default App;
