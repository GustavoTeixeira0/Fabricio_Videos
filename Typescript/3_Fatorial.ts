function calcularFatorial(n: number): number{
    let fatorial = 1;
    for (let i = 1; i <= n; i++){
        console.log(fatorial);
        fatorial *= i;
    }
    return fatorial;
}

console.log(calcularFatorial(5));