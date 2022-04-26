import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(), //é usado para gerar um número único (id) para cada tarefa
        texto: `Exercícios Labenu`,
        completa: false
      },

      {
        id: Date.now(),
        texto: `Checar emails`,
        completa: true
      },
    ],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.tarefas !== this.state.tarefas){
      const listaDeTarefaConvertida = JSON.stringify(this.state.tarefas)
      Window.localStorage.setItem(`tarefas`, listaDeTarefaConvertida)
    }
   
  };

  componentDidMount() {
    let arrayTarefas = localStorage.getItem("tarefas")
      arrayTarefas =  JSON.parse(arrayTarefas)
    if(arrayTarefas !== null){
    
    }else

      this.setState({ tarefas: arrayTarefas })    
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })

  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
    completa: false
    }
    const novaListaDeTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({ tarefas: novaListaDeTarefas })
  }


  selectTarefa = (id) => {
    const listaNovaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const alteraTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return alteraTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: listaNovaDeTarefas })
  }

  render()
  {    
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }

      //Não entendi function acima
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)} //PQ FOI DECLARADA UMA FUNCTION?
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
