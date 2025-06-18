import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calcularFatorial(n: number): number{
    let fatorial = 1;
    for (let i = 1; i <= n; i++){
        fatorial *= i;
    }
    return fatorial;
}

rl.question("Digite um número: ", (input) => {
    const numero = parseInt(input);

    if (isNaN(numero) || numero < 0){
        console.log("Digite um valor válido.");
    } else {
        const resultado = calcularFatorial(numero);
        console.log(`O fatorial de ${numero} é ${resultado}.`);
    }
    rl.close();
});