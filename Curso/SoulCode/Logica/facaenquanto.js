const prompt = require('prompt-sync')();

// /* 1 - Faça um programa que implemente um menu onde o usuario devera selecionar 1 ou 0. 
// Caso seja encontrado um numero diferente o programa deverá solicitar uma nova opção */

// let menu

// do{
//     console.log("1- Primeira opção")
//     console.log("2- Segunda opção")
//     menu = parseInt(prompt("Digite uma opção: "))
        
// } while(menu !== 1 && menu !== 2)  // o simbolo || serve para declarar a expressão OU
//     console.log("Saiu do programa")

// /* -------------------------------------------------------------------------- */
// /* 2 - Faça um programa que receba uma senha formada por 4 numeros inteiros, 
// verifique se a senha está correta e, caso nao, solicite a senha novamente. */

let senha

do { senha = parseInt(prompt("Digite uma senha: "))

if(senha == 1234){
    console.log("Senha correta")
}else{
    console.log("Senha ERRADA")
}

} while(senha != 1234)