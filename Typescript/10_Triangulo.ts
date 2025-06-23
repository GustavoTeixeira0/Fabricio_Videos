//Regra do Triangulo:
// A + B > C
// A + C > B
// B + C > A

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function formaTriangulo(a: number, b: number, c: number): boolean{
    return a + b > c && a + c > b && b + c > a;
}

function tipoTriangulo(a: number, b: number, c: number): string{
    if (!formaTriangulo(a, b, c)){
        return "Não forma um triangulo.";
    } else if (a === b && b === c){
        return "Triangulo Equilátero.";
    } else if (a === b || b === c || a === c){
        return "Triangulo Isóceles.";
    } else {
        return "Triangulo Escaleno.";
    }
}

rl.question("Digite o primeiro lado: ", (input1) =>{
    const lado1 = parseFloat(input1);

    rl.question("Digite o segundo lado: ", (input2) =>{
        const lado2 = parseFloat(input2);
        
        rl.question("Digite o terceiro lado: ", (input3) =>{
        const lado3 = parseFloat(input3);

        const resultado = tipoTriangulo(lado1, lado2, lado3);
        console.log(resultado);

        rl.close();
        });
    });
});