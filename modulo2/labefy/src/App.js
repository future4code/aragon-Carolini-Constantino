
import React from "react";
import logo from './img/logo.jpg';
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import PlaylistsPage from "./Pages/PlaylistsPage/PlaylistsPage";


class App extends React.Component {
  state = {
    currentPage: "list",
    clickedPlaylistUrl: ""
   
  }

  goToDetailsPage = (url) => {
    this.setState({currentPage: "detail", clickedPlaylistUrl: url})
  }

  gotToPlaylistsPage = (url) => {
    this.setState({currentPage: "list", clickedPlaylistUrl: ""})
  }

  selectPage = () => {
    switch (this.state.currentPage) {
      case "list":
      return <PlaylistsPage goToDetailsPage={this.goToDetailsPage}/>
      case "detail":
        return <DetailsPage gotToPlaylistsPage={this.gotToPlaylistsPage} url={this.state.clickedPlaylistUrl}/>
        default:
          return <PlaylistsPage goToDetailsPage={this.goToDetailsPage}/>

    }
  }
  render(){

  return (
    <div>
     <img className="logo" src= {logo} alt="Logo redondo com a imagem de uma caveira rosa e azul"/>
     {this.selectPage()}
    </div>

  );
  }
}

export default App;
