const contas = [
    {
        email: "astrodev@labenu.com",
        password: "abc123"
    },
    {
        email: "bananinha@gmail.com",
        password: "bananinha"
    }
]

const validationData = (email, password) => {
    let indexEmail = contas.findIndex(user => user.email == email);
    let indexPassword = contas.findIndex(user => user.password === password)

    if (email.includes("@")) {
        if (indexEmail !== -1) {
            if (password.length >= 6) {
                if(indexPassword !== -1){
                    return "login bem-sucedido"
                }
            } else {
                return "senha deve possuir no mínimo 6 caracteres"
            }
        } else {
            return "e-mail ou senha incorretos"
        }
    } else {
        return `e-mail inválido`
    }

}

console.log(validationData("astrodev@labenu.com", "abc123"))