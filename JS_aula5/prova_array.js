/* Crie um programa que receba uma lista de números inteiros e retorne o valor máximo e mínimo dessa lista. Para isso, você deve utilizar um array e a função Math para encontrar o valor máximo e mínimo. */

num_int = [1,2,3,4,5,6]
let max = Math.max(...num_int)
let min = Math.min(...num_int)

console.log(`O menor valor da array é o ${min} e o maior é o ${max}`)