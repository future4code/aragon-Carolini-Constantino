import React from "react";
import axios from "axios";
import RegistrationPage from "./RegistrationPage";



class UsersListPage extends React.Component{
    state={
    usersList: [],
    changePage: "UsersListPage"
    }
  
    componentDidMount() {
        this.getUsersList();
      }
    
      getUsersList = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
          Authorization: "carolini-constantino-aragon"
        }
      }
      )
      .then((response) => {
        this.setState({ usersList: response.data})
      })
      .catch((error) => {
        console.log(error.message);
      })
      }
    
    render(){
      return (
          <div>
              {this.state.changePage === "UsersListPage"? <RegistrationPage />: <UsersListPage/>},
          </div>,
          <section>
              {this.state.usersList.map((user) => {
                  return <ul><li key={user.id}> {user.name} <button>Deletar</button></li></ul>
              })}
          </section>
      
        
    );
  }
  }

  export default UsersListPage