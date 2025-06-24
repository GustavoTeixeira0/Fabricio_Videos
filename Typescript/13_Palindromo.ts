import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// TESTE -> toLowerCase -> teste

function isPalindromo(texto: string): boolean {
    texto = texto.toLowerCase().replace(/\s/g, "");

    const invertido = texto.split("").reverse().join("");

    return texto === invertido
}

rl.question("Digite uma palavra: ", (input) =>{
    if (isPalindromo(input)){
        console.log(`${input} é um Palíndromo.`);
    } else {
        console.log(`${input} não é um Palíndromo.`);
    }
    rl.close();
});