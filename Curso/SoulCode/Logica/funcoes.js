const prompt = require('prompt-sync')();

// /*O procedimento não retorna nada, apenas execula, a função retorna algo que vira uma variavel*/

// /* 1 - Crie uma função que receba como parametro o numero 2, a mesma deve retornar a soma dos numeros recebidos*/

// let n1, n2, recebe_valor

// n1 = parseInt(prompt(`Digite um numero: `))
// n2 = parseInt(prompt(`Digite outro numero: `))

// recebe_valor = funcao_soma(n1, n2)
// console.log(`O valor da soma é: ${recebe_valor}`)

// function funcao_soma(n1, n2) {
//     let soma
//     soma = n1 + n2
//     return soma
// }

// /* 2 - Crie uma função que o usuario digite dois numeros e escolha se quer 
// somar ou multiplicar (cada função deve retornar o valor do resultado)*/

let n1, n2, recebe_valor

n1 = parseInt(prompt(`Digite um numero: `))
n2 = parseInt(prompt(`Digite outro numero: `))

console.log(`1- Somar`)
console.log(`2- Multiplicar`)

escolha = parseInt(prompt(`Escolha uma opção`))

switch(escolha) {
    case 1:
        recebe_valor = soma_valores(n1, n2)
        console.log(`O valor da soma é: ${recebe_valor}`)
        break
    case 2: 
        recebe_valor = multiplica_valores(n1, n2)
        console.log(`O valor da multiplicação é: ${recebe_valor}`)
        break
    default:
        console.log(`Opção invalida`)
        break
}

function soma_valores(n1, n2) {
    let resultado
    resultado = n1 + n2
    return resultado
}

function multiplica_valores(n1, n2) {
    let resultado
    resultado = n1 * n2
    return resultado
}