// Contar numeros de forma regressiva até chegar no valor de 1

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite um número: ", (input) =>{
    const numero = parseInt(input);

    if (isNaN(numero) || numero < 0){
        console.log("Digite um número inteiro não negativo.");
    } else {
        console.log("Contagem regressiva a partir do número: ", numero);
        let i = numero;

        while(i >= 0) {
            console.log(i);
            i--;
        }
    }
    rl.close();
});