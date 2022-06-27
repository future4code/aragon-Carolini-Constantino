//Exercício 2
const primeiroNum = Number(process.argv[3]);
const segundoNum = Number(process.argv[4]);

switch( process.argv[2]){
    case "add":
        return console.log(`-> ${primeiroNum + segundoNum}`);
        case "sub":
            console.log(`-> ${primeiroNum - segundoNum}`);
            case "mult":
                console.log(`-> ${primeiroNum * segundoNum}`);
                case "div":
                    console.log(`-> ${primeiroNum / segundoNum}`);
}