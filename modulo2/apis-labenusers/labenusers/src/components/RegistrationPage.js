import React from "react";
import axios from "axios";


class RegistrationPage extends React.Component{
    state={
        inputName: "",
        inputEmail: "",
    }

    onChangeInputName = (event) => {
        this.setState({ inputName: event.target.value });
      };
    
      onChangeInputEmail = (event) => {
        this.setState({ inputEmail: event.target.value });
      };

    /*creatUser = () => {
        const body = {
          name: this.state.inputName ,
          email: this.state.inputEmail
        };
    
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
          headers: {
            Authorization: "carolini-constantino-aragon"
        }
        }
        )
        .then((response) => {
          alert(`Usuária(o) ${this.state.inputName} cadastrado com sucesso!`);
          this.setState({inputName: "", inputEmail: ""});
        })
        .catch((error) => {
          alert("Erro ao criar o usuário");
          console.log(error.message.data);
        })
      };*/

      creatUser = async() => {
        const body = {
          name: this.state.inputName ,
          email: this.state.inputEmail
        };
        try {
       const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
          headers: {
            Authorization: "carolini-constantino-aragon"
        }
        })
          alert(`Usuária(o) ${this.state.inputName} cadastrado com sucesso!`);
          this.setState({inputName: "", inputEmail: ""});
        }
        catch (error) {
          alert("Erro ao criar o usuário");
          console.log(error.message.data);
        }
      };
    
    render(){
      return (
      <div>
        <h1>Página de cadastro</h1>
    <input
       placeholder='Nome'
       type="text"
       value={this.state.inputName}
       onChange={this.onChangeInputName}
    />
    <input 
       placeholder='E-mail'
       type="email"
       value={this.state.inputEmail}
       onChange={this.onChangeInputEmail}
    />

      <button onClick={this.creatUser}>Criar Usuário</button>

      </div>
    );
  }
  }

  export default RegistrationPage