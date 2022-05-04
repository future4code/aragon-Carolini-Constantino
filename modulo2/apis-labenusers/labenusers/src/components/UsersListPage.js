import React from "react";
import axios from "axios";
import RegistrationPage from "./RegistrationPage";
import App from "../App.css";



class UsersListPage extends React.Component{
    state={
    usersList: [],
    changePage: "UsersListPage"
    }
  
    componentDidMount() {
        this.getUsersList()
      }
    
      getUsersList = async() => {
        try {
          const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
          Authorization: "carolini-constantino-aragon"
        }
      })
      
         this.setState({ usersList: response.data})
      }
      catch (error) {
        alert("Ocorreu um erro, tente novamente")
      }
    }

     /*userDel = async(id) => {
      try {
        const response = await axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id", {
        headers: {
          Authorization: "carolini-constantino-aragon" 
      }
    })
        alert("Usuária(o) deletada(o) da lista com sucesso!")
        this.getUsersList()
      }
      catch (error) {
        alert("Ocorreu um erro, tente novamente")
      }
      }
*/
     userDel = (id) => {
        axios.delete( `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
          headers: {
            Authorization: "carolini-constantino-aragon" 
        }
      })
        .then((response) => {
          alert("Usuária(o) deletada(o) da lista com sucesso!")
          this.getUsersList()
        })
        .catch((error) => {
          alert("Ocorreu um erro, tente novamente")
        })
        }
    
    render(){
      return (
          <div>
              {this.state.changePage === "UsersListPage"? <RegistrationPage />: <UsersListPage/>},
          </div>,
          
          <section>
             <h1>Página da lista de usuários</h1>
              {this.state.usersList.map((user) => {
                  return <ul><li key={user.id}> {user.name} 
                  <button onClick={() => this.userDel(user.id)}>Deletar</button></li></ul>
              })}
          </section>
      
        
    );
  }
  }

  export default UsersListPage