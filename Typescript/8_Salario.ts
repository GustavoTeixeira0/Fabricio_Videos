import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calcularSalarioSemanal(horas: number, taxa: number): number{
    return horas * taxa;
}

rl.question("Digite a quantidade de horas trabalhadas: ", (inputHoras) =>{
    const horasTrabalhadas = parseFloat(inputHoras);

    rl.question("Digite a taxa por hora: ", (inputTaxa) =>{
        const taxaPorHora = parseFloat(inputTaxa);

        if(isNaN(horasTrabalhadas) || isNaN(taxaPorHora) || taxaPorHora < 0 || horasTrabalhadas < 0) {
            console.log("Digite um valor válido.");
        } else {
            const salarioSemanal = calcularSalarioSemanal(horasTrabalhadas, taxaPorHora);

            console.log(`O Salário semanal é de R$ ${salarioSemanal.toFixed(2)}.`);
        }
        rl.close
    });
});