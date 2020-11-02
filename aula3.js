//1. Desenvolva uma função que receba um array com 2 números e devolva um array ordenado por ordem crescente.
const ordCres = (arr) => arr.sort((a, b) => (a>b) ? (1) : (-1));
console.log(ordCres([99, 100]));

//2. Desenvolva uma função que receba um array com 3 números e devolva um array ordenado por ordem decrescente.
const ordDecres = (arr) => arr.sort((a, b) => (a>b) ? (-1) : (1));
console.log(ordDecres([13, 9, 11]));

//3. Desenvolva uma função que receba um array com 4 números e devolva um array pela ordem inversa. Se o array for [1,5,3,4] o resultado será [4,3,5,1]
const ordemInversa = (arr) => arr.reverse();
console.log(ordemInversa([1, 5, 3, 4]));

//4. Desenvolva uma função que receba um array (de qualquer tamanho) e devolva um array ordenado por ordem crescente (dica: verifique a utilização do método sort)
const ordCres2 = (arr) => arr.sort((a, b) => (a>b) ? (1) : (-1));
console.log(ordCres2([1, -4, 12, 99, -5, 10]));