//ex01 - Escreva uma função (Last) que receba um array como argumento e devolva o último elemento desse array.
var nome = "Ana Marques";//no caso de uma String a função Last vai devolver o último carater dessa String
var numeros = [0, 1, 2, 3, 4];

function Last (arr){
   return arr[arr.length - 1];
}
console.log(Last(nome));
console.log(Last(numeros));

//ex02 - O que é devolvido pelo push do código seguinte?
// i. var arr = [5, 7, 9];
// ii. arr.push(6); // => [5, 7, 9, 6], o método push() adiciona um novo elemento no final de um array
var arr = [5, 7, 9];
arr.push(6);
console.log(arr);

//ex03 - Utilizando o push e unshift, faça com que o array [2, 3, 4] contenha os números de 0 a 7, de forma ordenada.

var ordenar = [2, 3, 4];
ordenar.unshift(0, 1);//método unshift() adiciona elementos no início de um array, mas para que fiquem ordenados estes têm que ser inseridos de forma ordenada.
ordenar.push(5, 6, 7);//método push() adiciona elementos no fim de um array, mas para que fiquem ordenados estes têm que ser também inseridos de forma ordenada.
console.log(ordenar);
//caso não haja atenção ou controlo na inserção dos elementos no array, podemos optar pela inserção dos elementos desordenados através do método push()
// e fazer sort() do array.
let ordenar2 = [3, 2, 4];
ordenar2.push(0, 7, 6, 5, 1);
console.log(ordenar2.sort());

//ex04 - Altere os elementos ímpares do array seguinte para que contenham o dobro do valor inicial:
var numeros = [4, 9, 7, 2, 1, 8];

for (let i = 0; i < numeros.length; i++){
   if(numeros[i] % 2 ==! 0){
      numeros[i] = numeros[i] * 2;
   }
}
console.log(numeros);

//ex05 - Escreva uma função que receba um array e um index como parâmetros e devolva o conteúdo do array na posição do índex.
var cores = ["Azul", "Verde", "Vermelho", "Branco", "Preto", "Amarelo", "Cinzento" ];

function Colors(arr, index){
   console.log("A cor na posição " + index + " é o " + arr[index]);
}
Colors(cores, 2);