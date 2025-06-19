//É uma sequência de números inteiros, começando normalmente por 0 e 1, na qual cada termo subsequente corresponde à soma dos dois anteriores

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite um limite para calcular o Fibonacci: ", (input) =>{
    const limite = parseInt(input);
    let a = 0;
    let b = 1;

    console.log("Sequencia de Fibonacci: ");
    while(a <= limite) {
        const proximo = a +b;
        a = b;
        b = proximo;
        console.log(proximo);
    }
    rl.close();
});