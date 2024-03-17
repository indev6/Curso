const prompt = require('prompt-sync')();

// /* 1 - Leia um valor e informe ao usuario se o valor é maior ou igual a zero */

// let valor_1
// valor_1 = parseInt(prompt(`Digite um número: `));

// if (valor_1 >= 0) {
//     console.log(`O valor é maior ou igual a zero`)
// } else {
//     console.log(`O valor é menor que zero`)
// }

// /* -------------------------------------------------------------------------- */
// /* 2 - Solicite ao usuario que informe a sua idade , voce deve criar um codigo 
// que  mostre se o usuario é maior ou menor de idade */

// let idade
// idade = parseInt(prompt(`Digite sua idade: `));

// if (idade >= 18) {
//     console.log(`Voce tem ${idade} anos, MAIOR DE IDADE`)
// } else {
//     console.log(`voce é menor de idade`)
// }

// /* -------------------------------------------------------------------------- */
// /* 3 - Solicite para o usuario digitar dois numeros, realize a soma e mostra se 
// o resultado é igual a 30, se não for, mostre uma mensagem */
 
// let n1, n2;
//  n1 = parseInt(prompt(`Digite um numero: `))
//  n2 = parseInt(prompt(`Digite outro numero: `))

//  if (n1 + n2 == 30) {
//     console.log(`O resultado da soma é 30`)
//  } else {
//     console.log(`O resultado é diferente de 30`)
//  }

// /* -------------------------------------------------------------------------- */
// /* 4 - Solicite ao usuario que informe 3 notas. Logo após, calcule e exiba a média final destas notas. 
// Por ultimo, verifique se alguma das notas parciais é menor que a média final e a exibe (caso exita) */

// let nota1, nota2, nota3, media

// nota1 = parseInt(prompt(`Digite a primeira nota: `));
// nota2 = parseInt(prompt(`Digite a segunda nota: `));
// nota3 = parseInt(prompt(`Digite a terceira nota: `))

// media = (nota1 + nota2 + nota3) / 3

// if (nota3 < media) {
//     console.log(`A nota 3 é menor que a média`)
// } else if (nota2 < media) {
//     console.log(`A nota 2 é menor que a média`)
// } else if (nota1 < media) {
//     console.log(`A nota um é menor que a média`)
// } else {
//     console.log(`Não tem nota abaixo da média`)
// }

// /* -------------------------------------------------------------------------- */
// /* 5 - Ler 3 valores (considere que não serao informados valores iguais) e verifique o maior*/

let n1, n2, n3
n1 = parseInt(prompt(`Digite um valor: `))
n2 = parseInt(prompt(`Digite outro valor: `))
n3 = parseInt(prompt(`Digite outro valor: `))

if (n1 > n2 && n1 > n3) {
    console.log(`O maior valor é ${n1}`)
    
} else if (n2 > n3 && n2 > n1) {
    console.log(`O maior valor é ${n2}`)
} else {
    console.log(`O maior valor é ${n3}`)
}