function imprimeType(parametro: any): void {
    if (typeof parametro === "number") 
        console.log("O tipo da variável recebida é um number") 
    else if(typeof parametro === "string") 
        console.log("O tipo da variável recebida é um estring")
    else if(typeof parametro === "boolean")
        console.log("O tipo da variável recebida é um boolean")
    else 
        console.log("O tipo da variável recebida é um undefined")
}

imprimeType(1)
imprimeType("Oi")
imprimeType(true)
imprimeType(undefined)
imprimeType(Number(process.argv[2])) 