const prompt = require('prompt-sync')();

// /* 1 - Faça um programa que imprima uma matriz 4x3 (4 linhas x 3 colunas)*/

// let matriz = Array.from({ length: 4 }, () => new Array(3));

// for(linha = 0; linha < 4; linha++) {
//     for(coluna = 0; coluna < 3; coluna++) {
//         matriz[linha][coluna] = parseInt(prompt(`Digite um valor para a linha ${linha}, coluna ${coluna}: `))
//     }
// }

// for(linha = 0; linha < 4; linha++) {
//     for(coluna = 0; coluna < 3; coluna++) {
//         console.log(`${linha} ${coluna} = ${matriz[linha][coluna]}`)
//     }
// }

// /* 2 - Dada uma matriz 4 x 5, calcular a soma de todos os elementos*/

// let matriz = Array.from({ length: 4 }, () => new Array(5));
// let soma = 0

// for(linha = 0; linha < 4; linha++) {
//     for(coluna = 0; coluna < 5; coluna++) {
//         matriz[linha][coluna] = parseInt(prompt(`Digite um valor para a linha ${linha}, coluna ${coluna}: `))
//     }
// }

// for(linha = 0; linha < 4; linha++) {
//     for(coluna = 0; coluna < 5; coluna++){
//         soma = soma + matriz[linha][coluna]
//     }
// }
//     console.log(`O valor de soma é: ${soma}`)

/* 3 - Leia uma matriz 4 x 4, imprima e retorne a localização (linha e coluna) do maior valor*/

let matriz = Array.from({ length: 4 }, () => new Array(4));
let maior_valor = 0, salva_linha, salva_coluna

for(linha = 0; linha < 4; linha++) {
     for(coluna = 0; coluna < 4; coluna++) {
         matriz[linha][coluna] = parseInt(prompt(`Digite um valor para a linha ${linha}, coluna ${coluna}: `))
    }
 }

 for(linha = 0; linha < 4; linha++) {
    for(coluna = 0; coluna < 4; coluna++) {
        if(matriz[linha][coluna] > maior_valor){
            maior_valor = matriz[linha][coluna]
            salva_linha = linha
            salva_coluna = coluna
        }
    }
 }
    console.log(`O maior valor da matriz é ${maior_valor}, está na linha ${salva_linha} e na coluna ${salva_coluna}`)

