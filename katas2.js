// comece a criar a sua função add na linha abaixo
function add(num1, num2) {
    return num1 + num2
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(num1, num2) {

    let primeiroNum = 0
    for (let i = 0; i < num2; i++) {
        primeiroNum = add(primeiroNum, num1)
    }
    return primeiroNum
}
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function power(x, n) {

    let number = 1
    for (let i = 0; i < n; i++) {
        number = multiply(number, x)
    }
    return number
}
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(numX) {

    let number = numX
    for (let i = 1; i < numX; i++) { 
        number = multiply(number, i)
    }
    return number
}
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
