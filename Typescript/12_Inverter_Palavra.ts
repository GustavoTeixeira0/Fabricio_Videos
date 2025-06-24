import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function inverterPalavra(palavra: string): string{
    return palavra.split("").reverse().join("");
}

rl.question("Digite uma palavra: ", (inputPalavra) =>{
    const palavraInvertida = inverterPalavra(inputPalavra);

    console.log(`A palavra invertida é: ${palavraInvertida}`);
    rl.close();
});