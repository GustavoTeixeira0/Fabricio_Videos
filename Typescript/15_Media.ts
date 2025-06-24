import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Calcular a Média de 3 Numeros

function calcularMedia(numeros: number[]): number{
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}

rl.question("Digite o primeiro número: ", (input1) =>{
    const num1 = parseFloat(input1);

    rl.question("Digite o segundo número: ", (input2) =>{
        const num2 = parseFloat(input2);

        rl.question("Digite o terceiro número: ", (input3) =>{
            const num3 = parseFloat(input3);

            const media = calcularMedia([num1, num2, num3]);

            console.log(`A média de (${num1}, ${num2} e ${num3}) é ${media.toFixed(2)}`);
            rl.close();
        });
    });
});