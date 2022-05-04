import React from 'react';
import './App.css';
import RegistrationPage from './components/RegistrationPage';
import UsersListPage from './components/UsersListPage';

class App extends React.Component {
  state = {
  page: "RegistrationPage"
  };

  changePage = () => {
    if ( this.state.page === "RegistrationPage") {
      this.setState ({ page: "UsersListPage" });
    } else{
      this.setState({ page: "RegistrationPage"});
    }
  };

  render() {
    return (
    <section >
      <button onClick={this.changePage}>Trocar de tela</button>
      {this.state.page === "RegistrationPage"? <RegistrationPage /> : <UsersListPage/> }
    </section>
   );
 }
}

export default App