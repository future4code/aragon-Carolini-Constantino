function validacaoDeChavesDeObj(obj) {
    const resultado = { isError: "", errors: [""] }

    for (const prop in obj) {

        if (obj[prop] === undefined) {
            resultado.isError = true,
                resultado.errors.push(prop)


        } else {
            resultado.isError = false,
                resultado.errors = [];

        }
    }
    return resultado;
}

console.log(validacaoDeChavesDeObj({ id: 1, name: "Carol", email: "carol@gmail.com" }));
console.log(validacaoDeChavesDeObj({ id: 1, name: undefined, email: undefined }));