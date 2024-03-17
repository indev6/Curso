const prompt = require('prompt-sync')();

// /*O procedimento não retorna nada, apenas execula, a função retorna algo que vira uma variavel*/

// /* 1 - Crie um procedimento que quando for chamdo no inicio mostre uma mensagem*/

// mensagem()

// function mensagem() {
//     console.log(`Ola`)
// }

// /* 2 - Crie um procedimento que some dois numeros e mostre o resultado*/

// let n1, n2

// n1 = parseInt(prompt(`Digite um numero: `))
// n2 = parseInt(prompt(`Digite outro numero: `))

// procedimento_soma(n1, n2 )

// function procedimento_soma(n1, n2) {
//     let soma
//     soma = n1 + n2
//     console.log(`O resultado da soma é: ${soma}`)
// }


// /* 3 - O procedimento deve solicitar o nome e depois mostar, ola NOME, bem vindo*/

// let nome

// nome = prompt(`Digite seu nome: `)

// procedimento_nome(nome)

// function procedimento_nome(nome) {
//     console.log(`Ola ${nome}`)
// }

/* 4 - O procedimento deve solicitar dois numeros e o usuario deve escolher se quer 
somar ou multiplicar os valores, cada calculo deve ter seu procedimento*/

let n1, n2, escolha

n1 = parseInt(prompt(`Digite um numero: `))
n2 = parseInt(prompt(`Digite outro numero: `))

console.log(`1- Somar`)
console.log(`2- Multiplicar`)

escolha = parseInt(prompt(`Escolha uma opção`))

switch(escolha) {
    case 1:
        procedimento_soma(n1, n2)
        break
    case 2: 
        procedimento_multiplicar(n1, n2)
        break
    default:
        console.log(`Opção invalida`)
        break
}

function procedimento_soma(n1, n2) {
    let soma
    soma = n1 + n2
    console.log(`A soma dos valores é: ${soma}`)
}

function procedimento_multiplicar(n1, n2) {
    let multiplicar
    multiplicar = n1 * n2
    console.log(`O valor da multiplicalçao é: ${multiplicar}`)
}