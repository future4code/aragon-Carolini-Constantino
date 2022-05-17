import { useState } from 'react';
import './App.css';

function App() {
//Aqui em baixo é criada o estado "inputValue" e dentro da "useState" é onde está guardado o valor do estado,
  const [inputValue, setInputValue] = useState("") //"setInput" só deve ser chamada quando quiser alterar o valor do estado 
  
  //Ou seja, aqui está sendo criado o estado "lista" q tem o valor de uma []
  const [lista, setLista] = useState([])

  //Aqui é criado o método que será chamado no onChange do input, ele define um novo valor
  const handleInput = (event) => { //do "inputValue", chamando o setInput passado lá em cima, 
    setInputValue(event.target.value) //e diz que esse novo valor é o que está sendo digitado naquela hora no input
  }
//Na const seguinte é criada para ser utilizada no onClick do button "Adicionar". Ou seja,
  const addTexto = () => { //quando o button é clicado, é chamado esse método que
    const novaLista = [...lista, inputValue] //cria uma nova lista contendo a lista + o que está sendo enviado no input
    setLista(novaLista)//e atualiza o valor da lista (usando "setLista") com o q vem na novaLista
    setInputValue("")//Aqui é onde eu faço o input ficar vazio td vez que o button for clicado
  }

//Mas a gente quer renderizar a lista, com cada item abaixo do outro, na tela. Para separar cada item
  const renderizarLista = lista.map(item => { //é necessário fazer um map, pq ele returna um item por vez
    return <ul>
      <li>{item}</li> 
    </ul>
  })

/*RESUMO:
1-cria um input
2-dentro da tag input, defina o nome do estado dele, ex: "inputName"
3-crie esse estado: const [inputName, setInputName] = useState ("")
4-Crie um método para controlar esse input, e defina que seu NOVO valor é o que está
sendo passado dentro dele: const handleInputName = (e) => {setInputName(e.target.value)}

5-Mas o que quero fazer com o que está no input? Quero enviar pra uma lista
6-crie essa lista como um estado tbm: const [lista, setLista] = useState([])
7-agora crie um botão "ADICIONAR" 
8-dentro do button atribua um onClick e já dê um nome ao método que será chamado quando ser clicado
ex: "addItem"
9-crie esse método e copie a lista existente + o que foi enviado no input. No final, diga que a 
lista é esse método. 
EX: const addItem = () =>{ const novaLista = [...listaOrriginal, inputName]}
    setInputName(navaLista)
10-Não esqueça de atualizar o valor do input pra vazio, dentro do métod acima q será chamado
quando o button for clicado.
11-Faça um map da lista para retornar cada item, um a um, separadamente
12-chame a const que foi feito o map dentro do return para que cada item seja renderizado na tela

*/
  return (
    <div className="App">
      <label htmlFor="texto">Texto:</label>
      <input 
        type="text" 
        id="texto" 
        value={inputValue}
        onChange={handleInput}
        />
      <button onClick={addTexto}>Adicionar</button>

      {renderizarLista}
     

    </div>
  );
}

export default App;


//Exemplo contador

// function App() {

//   const [contador, setContador] = useState(0)
 
//   const incrementar = () => {
//     setContador(contador + 1)
//   }


//   return (
//     <div className="App">
//     <h1>{contador}</h1>
//     <button onClick={incrementar}>incrementar</button>
//     </div>
//   );
// }

// export default App;
