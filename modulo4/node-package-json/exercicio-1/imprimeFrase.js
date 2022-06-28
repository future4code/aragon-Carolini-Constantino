//Exercício 1
/*a) "process.argv[parâmetro]" é utilizado para acessar os parâmetros passados no node.js.
Esse comando é nativo do node e é um array de strings, sendo os 2 primeiros
fixos pois o "0" é o node e o "1" é o nome do arq que vamos executar. Ex:
node index.js carol 

b)*/
const nome = process.argv[2];
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos!`);
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`);





