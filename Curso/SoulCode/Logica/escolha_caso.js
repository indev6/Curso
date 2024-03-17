const prompt = require('prompt-sync')();

// /* 1 - O programa deve solicitar ao usuario que escolha uma opção e exibir uma frase correspondente a escolha

// 1- Elogio
// 2- Ofensa
// 3-Sair
// Em cada uma das opções coloque a frase (voce entrou em menu)*/

// let op

// console.log(`1- Elogio`)
// console.log(`2- Ofensa`)
// console.log(`3- Sair`)

// op = parseInt(prompt(`Digite uma opcao: `))

//     switch(op) {
//         case 1:
//             console.log(`Isto é um elogio`)
//             break;
//         case 2:
//             console.log(`isto é uma ofensa`)
//             break;
//         case 3:
//             console.log(`Você saiu`)
//             break;
//         default:
//             console.log(`Opção invalida`)
//     }


// /* -------------------------------------------------------------------------- */
// /* 2 - Crie um menu para que o usuario tenha acesso a algumas opçoes no seu codigo
// 1- Soma: Solicite que o usuario digite dois numeros, realize a soma e mostre o resultado
// 2- Multiplicação: Solicite que o usuario digite dois numeros, realize o calculo e mostre o resultado
// 3- Verificar idade: Solicite para o usuario digitar seu nome e sua idade, no final deve mostrar se é maior de idade*/

// let op2

// console.log(`1 - Soma`)
// console.log(`2 - Multiplicação`)
// console.log(`3 - verifica idade`)

// op2 = parseInt(prompt(`Escolha uma opção: `))

// switch(op2) {
//     case 1:
//         n1 = parseInt(prompt(`Digite um numero: `))
//         n2 = parseInt(prompt(`Digite outro numero: `))
//         soma = n1 + n2
//         console.log(`O resultado da soma é: ${soma}`)
//         break;
//     case 2:
//         n1 = parseInt(prompt(`Digite um numero: `))
//         n2 = parseInt(prompt(`Digite outro numero: `))
//         multiplicacao = n1 * n2
//         console.log(`O resultado da multiplicação é: ${multiplicacao}`)
//         break;
//     case 3:
//         nome = prompt(`Digite seu nome: `)
//         idade = parseInt(prompt(`Digite sua idade: `))
//         if (idade < 18) {
//             console.log(`Olá ${nome}, você é MENOR DE IDADE ${idade}`)
//         } else {
//             console.log(`Olá ${nome}, você é MAIOR DE IDADE ${idade}`)
//         }
//         break;
//     default:
//         (console.log(`Opção invalida`))
//         break;
// }

// /* -------------------------------------------------------------------------- */
// /* 3 - Crie uma calculadora que solicite ao usuario dois numero e realize, soma, multiplicação, subtração e divisão*/

let op, n1, n2, calculo

n1 = parseInt(prompt(`Digite um número: `))
n2 = parseInt(prompt(`Digite outro número: `))

console.log(`1- Soma`)
console.log(`2- Subtração`)
console.log(`3- Divisão`)
console.log(`4- Subtração`)

op = parseInt(prompt(`Digite a opção desejada`))

switch(op) {
    case 1:
        calculo = n1 + n2
        console.log(`O resultado da soma é ${calculo}`)
        break;
    case 2:
        calculo = n1 - n2
        console.log(`O resultado da subtração é ${calculo}`)
        break;
    case 3:
        calculo = n1 / n2
        console.log(`O resultado da divisão é ${calculo}`)
        break;
    case 4:
        calculo = n1 * n2
        console.log(`O resultado da multiplicação é ${calculo}`)
        break;
    default:
        (console.log(`Opção invalida`))
}