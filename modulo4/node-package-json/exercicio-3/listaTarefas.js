//Exercício 3
const tarefas = [];

tarefas.push(process.argv[2]);
const alert = "Tarefa adicionada com sucesso!";


const resposta = `"${alert}", "tarefas:${tarefas}"`

console.log(resposta)