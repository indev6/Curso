const prompt = require('prompt-sync')();

// /* 1 - Crie um vetor de 6 posições do tipo inteiro, solicite para o usuario 
// digitar todos os valores  e apos mostre todo  os numeros digitados*/

//   let vetor = Array(6);
//   for (i = 0; i < 6; i++) {
//     vetor[i] = prompt(`Digite o valor para a posição ${i} do vetor: `);
//   }

//   for (i = 0; i < 6; i++) {
//     console.log(`O vetor na posição ${i} tem o valor de ${vetor[i]}`);
//   }

// /* 2 - De acordo com os dados anteriores, mostre os dados na ordem descrescente*/

// let vetor = Array(6);
// for (i = 0; i < 6; i++) {
//   vetor[i] = prompt(`Digite o valor para a posição ${i} do vetor: `);
// }

// for (i = 5; i >= 0; i--) {
//   console.log(`O vetor na posição ${i} tem o valor de ${vetor[i]}`);
// }

// /* 3 - Solicite para o usuario um vetor de 10 posições, após voce deve mostrar apenas os numeros pares*/

// let numeros = Array(10);

// for(i = 0; i < 10; i++) {
//   numeros[i] = parseInt(prompt(`Digite um numero: `))
// }
// for(i = 0; i < 10; i++) {
//   if(numeros[i] % 2 == 0) {
//     console.log(numeros[i])
//   }
// }

// /* 4 - De acordo com o exercicio anterior, mostre apenas o numeros impares*/

let numeros = Array(10);

for(i = 0; i < 10; i++) {
  numeros[i] = parseInt(prompt(`Digite um numero: `))
}
for(i = 0; i < 10; i++) {
  if(numeros[i] % 2 != 0) {
    console.log(numeros[i])
  }
}