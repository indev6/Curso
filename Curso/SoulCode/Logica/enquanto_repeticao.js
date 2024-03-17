const prompt = require('prompt-sync')();

// /* 1 - Crie um programa que imprima 11 vezes a frase Hello World utilizando enquanto */

// let contador = 1

// while (contador <= 11) {
//     console.log(`Hello World ${contador}`)
//     contador = contador + 1 //Pode ser substituido por contador ++
// }

// /* -------------------------------------------------------------------------- */
// /* 2 - Escreva um algoritimo que leia um numero do teclado ate que encontre um numero menor ou igual a 1*/

// let contador = 2

// while (contador > 1) {
//     contador = parseInt(prompt(`Digite até acertar o numero para sair`))
// }
//     console.log(`Você saiu`)

// /* -------------------------------------------------------------------------- */
// /* 3 - Crie uma calculadora que solitite para o usuario dois numeros e realize, soma, divisão...
// O programa deve solicitar o menu até que o usuario digite zero*/

// let contador = 4, n1, n2, calculo
 
// n1 = parseInt(prompt(`Digite um numero: `))
// n2 = parseInt(prompt(`Digite outro numero: `))

// while(contador != 0) {
//     console.log(`1- Soma`)
//     console.log(`2- Subtraçã0`)
//     console.log(`3- Multiplicação`)
//     console.log(`4- Divisão`)
//     console.log(`0- Para sair`)

//     contador = parseInt(prompt(`Escolha uma opção: `))

//     switch(contador){
//         case 1:
//             calculo = n1 + n2
//             console.log(`O resultado da soma é ${calculo}`)
//             break;
//         case 2:
//             calculo = n1 - n2
//             console.log(`O resultado da subtração é ${calculo}`)
//             break;
//         case 3:
//             calculo = n1 / n2
//             console.log(`O resultado da divisão é ${calculo}`)
//             break;
//         case 4:
//             calculo = n1 * n2
//             console.log(`O resultado da multiplicação é ${calculo}`)
//             break;
//         case 0:
//             console.log(`Voce saiu`)
//             break;
//         default:
//             console.log(`Opção invalida`)
//     }
// }

// /* -------------------------------------------------------------------------- */
// /* 4 - Solicite ao usuario que informe 10 numeros, Logo apos calcula e exibe a media dos numeros digitados*/

let numero, calculo = 0, media, contador = 1

while(contador <= 10) {
    numero = parseInt(prompt(`Digite um numero: `))

    calculo = calculo + numero
    contador = contador + 1
}
    media = calculo / 10
    console.log(`A média dos numeros digitados é: ${media}`)