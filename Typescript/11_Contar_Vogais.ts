import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function contarVogais(frase: string): number{
    const vogais = "aeiouAEIOUÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÃÕãõÂÊÎÔÛâêîôû";

    let contador = 0;

    for (const char of frase){
        if (vogais.includes(char)){
            contador++
        }
    }
    return contador;
}

rl.question("Digite uma frase: ", (inputFrase) =>{
    const totalVogais = contarVogais(inputFrase);

    console.log(`A frase contém ${totalVogais} vogais.`);
    rl.close();
});