import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calcularTemperatura(celsius: number): number {
    return (celsius * 9) / 5 + 32;
}

rl.question("Digite a temperatura em graus Celsius: ", (input) => {
    const celsius = parseFloat(input);

    if(isNaN(celsius)){
        console.log("Por favor, digite um número válido: ");
    } else {
        const fahrenheit = calcularTemperatura(celsius);
        console.log(`${celsius} graus Celsius é igual a ${fahrenheit.toFixed(2)} graus Fahrenheit.`);
    }
    rl.close();
});
