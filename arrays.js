//1. Escreva uma função que devolva um array e que para tal receba um valor e o número de posições que o valor será repetido no array.
const ponto1 = (value, nRep) => {
    let arr = [];
    for(let i = 0; i < nRep; i++){
        arr.push(value);
    }
    return arr;
};
console.log(ponto1(2, 2));

//2. Escreva uma função que recebe um array e um valor como parâmetros e devolve o número de vezes que o valor se repete no array.
const ponto2 = (arr, value) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == value){
            count += 1;
        }
    }
    return count;
};
console.log(ponto2([5, 6, 5, 9, 5, 10, 5], 5));

//3. Escreva uma função que devolva um array de números inteiros entre 2 valores passados como parâmetro.
const ponto3 = (value1, value2) => {
    let arr = [];
    if(value1 < value2){
        while (value1 <= value2) {
            arr.push(value1);
            value1++;
        }
    }else if (value1 > value2){
        while (value1 >= value2){
            arr.push(value1);
            value1--;
        }
    } else {
        arr.push(value1);
    }
    return arr;
};
console.log(ponto3(10, -10));

//4. Desenvolva uma função que receba uma String e que devolva a mesma string com a capitalização invertida.
const ponto4 = (arr) => {
    let invertido = "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == arr[i].toUpperCase()){
            invertido += arr[i].toLowerCase();
        } else {
            invertido += arr[i].toUpperCase();
        }
    }
    return invertido;
};
let wordSplit = (s) => s.split('');
console.log(ponto4(wordSplit("Ana Marques")));

//5. Altere os elementos ímpares do array seguinte para que contenham o dobro do valor inicial:
var numeros = [4, 9, 7, 2, 1, 8];
//Utilize o conceito de Arrow Functions.
const imparDobro = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            arr[i] *= 2;
        }
    }
    return arr;
};
console.log(imparDobro(numeros));