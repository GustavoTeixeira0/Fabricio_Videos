// Calcular area do circulo pi * r ^ 2

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calcularAreaCirculo(raio: number): number{
    return Math.PI * Math.pow(raio, 2)
}

rl.question("Digite o valor do raio: ", (input) =>{
    const r = parseFloat(input);

    if (isNaN(r) || r < 0){
        console.log("Digite um valor válido.");
    } else {
        const area = calcularAreaCirculo(r);
        console.log(`A área do círculo com raio ${r} é ${area.toFixed(2)}`)
    }
    rl.close();
});