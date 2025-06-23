//Aprovado   >= 60
//Reprovado  <60
//Invalido   >0   <100

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite a nota do estudante: ", (inputNota) =>{
    const nota = parseFloat(inputNota);

    if (isNaN(nota) || nota < 0 || nota > 100){
        console.log("Digite um valor válido.")
    } else {
        if (nota >= 60){
            console.log(`A nota é ${nota}. O estudante foi aprovado!`);
        } else {
            console.log(`A nota é ${nota}. O estudante foi reprovado!`);
        }
    }
    rl.close();
});