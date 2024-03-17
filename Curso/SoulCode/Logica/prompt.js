const prompt = require('prompt-sync')();

// /* 1 - Crie uma variável do tipo cadeia com o nome de nome e solicite ao 
// usuário digitar o nome, e voce deve salvar o nome na variavel criada */

// let nome1;
// nome1 = prompt(`digite seu nome: `);
// console.log(`Seu nome é ${nome}`)

// /* -------------------------------------------------------------------------- */
// /* 2 - Solicite para o usuário o nome e a sua idade, após o usuario digitar 
// esses valores voce deve salvar em variaveis e ao final e ao final motrar os dados para o usuario */

// let nome2, idade1;
// nome2 = prompt(`Digite seu nome: `)
// idade1 = prompt('Digite a sua idade: ')
// console.log(`Seu nome é ${nome2} e você tem ${idade1} anos`)

// /* -------------------------------------------------------------------------- */
// /* 3 - Solicite ao usuario que informe sua data de nascimento em Mes, dia e ano e mostre o resultado */

// let mes, dia, ano
// mes = prompt(`Digite o mes do seu nascimento: `)
// dia = prompt(`Digite o dia do seu nascimento: `)
// ano = prompt(`Digite o ano do seu nascimento: `)
// console.log(`Voce nasceu em ${dia} / ${mes} / ${ano}.`)

// /* -------------------------------------------------------------------------- */
// /* 4 - Solicite ao usuario o valor de dois numeros, após realize o calculo da soma e da multiplicação */

let n1, n2 , soma, multiplicacao;
n1 = parseInt(prompt(`Digite um número: `));
n2 = parseInt(prompt(`Digite outro nomero: `));
soma = n1 + n2
multiplicacao = n1 * n2
console.log(`O valor da soma é: ${soma}`)
console.log(`O valor da multiplicacao é: ${multiplicacao}`)