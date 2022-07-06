function checaRenovacaoRG(anoNasc: any, dataEmissao: any): any {
//Date.now() retorna o número de milisegundos decorridos desde 1 de janeiro de 1970 00:00:00 UTC.
  const timeElapsed = Date.now(); //return 1656857529171
  const today: any = new Date(timeElapsed); // return 2022-07-03T14:45:39.692Z
  const dataAtual: any = today.toLocaleDateString(); ////03/07/2022
  const dataAtualSplitted: any = dataAtual.split("/"); //[ '03', '07', '2022' ]
  const anoAtual: any = dataAtualSplitted[2]; //2022
  const anoNascimentoSplitted: any = anoNasc.split("/");// ['24', '04', '1993' ]
  const anoNascimento: any = anoNascimentoSplitted[2]; //1993
  const dataEmissaoSplitted: any = dataEmissao.split("/");//[ '07', '11', '2015' ]
  const anoEmissao: any = dataEmissaoSplitted[2]; //2015
  const idade = anoAtual - anoNascimento; //29
  const tempoCarteira = anoAtual - anoEmissao; //7
  const cond1: boolean = idade <= 25 && tempoCarteira >= 5;
  const cond2: boolean = idade <= 50 && tempoCarteira >= 10;
  const cond3: boolean = idade > 50 && tempoCarteira >= 15;

  if (cond3) {
    return `Idade: ${idade}, Tempo de carteira: ${tempoCarteira}. Doc vencido: Precisa renovar!`;
  } else if (cond2) {
    return `Idade: ${idade}, Tempo de carteira: ${tempoCarteira}. Doc vencido: Precisa renovar!`;
  } else if (cond1) {
    return `Idade: ${idade}, Tempo de carteira: ${tempoCarteira}. Doc vencido: Precisa renovar!`;
  } else {
    return `Idade: ${idade}, Tempo de carteira: ${tempoCarteira}. Doc em prazo de validade: Não precisa renovar!`;
  }
}

console.log(checaRenovacaoRG("24/04/1993", "07/11/2015"))