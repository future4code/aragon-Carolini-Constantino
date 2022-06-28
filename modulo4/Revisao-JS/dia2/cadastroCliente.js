let clients = [
    { id: 1, nome: "Fulando" },
    { id: 2, nome: "Ciclano" },
    { id: 3, nome: "Beltrano" },
    { id: 4, nome: "Fulana" }
];

const addClient = (client) => {
    let index = clients.findIndex(obj => obj.id === client.id); 
    
    if (index < 0) {
        clients.push(client);
        return clients
    }
    else {
        return `Erro. Parâmetro inválido (${client.id}).`
    }
};

addClient({id:5, nome: "Nick"});
addClient({id:6, nome: "Lari"})
console.log(addClient({id: 7, nome:"Carol"}))