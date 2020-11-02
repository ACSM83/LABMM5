//ex01 - Escreva a função Rest que retorna todos os elementos do array, exceto o primeiro.
let animais = ["cao", "gato", "rato", "pulga"];

function Rest(arr){
    arr.splice(0, 1); // 0 refere-se à posição do elemento no array e 1 é o número de elementos a remover
    return arr;
}
console.log(Rest(animais));

//ex02 - Escreva a função Primeiro que retorna o primeiro elemento do array.
let nomes = ["Maria", "Joana", "Catarina", "Josefina"];

function Primeiro(arr){
    return arr.splice(0, 1);
}
console.log(Primeiro(nomes));

//ex03 - Escreva a função ExceptoUltimo que retorna todos os elementos do array, exceto o último.
let cores = ["Azul", "Vermelho", "Verde"];

function ExcetoUltimo(arr){
    arr.splice(-1, 1);
    return arr;
}
console.log(ExcetoUltimo(cores));

//ex04 - Escreva a função Ins que receba como parâmetros um elemento e um array e insira o elemento no início do array.
let doces = ["chocolates", "rebuçados", "gomas"];
function Ins(elem, arr){
    arr.unshift(elem);
    return arr;
}
console.log(Ins("bolos", doces));

//ex05 - Escreva a função Ends que receba como parâmetros um elemento e um array e insira o elemento no final do array.
let materiais = ["madeira", "ferro", "cimento"];

function Ends (elem, arr){
    arr.push(elem);
    return arr;
}
console.log(Ends("pedra", materiais));

/*ex06 - Utilizando as funções anteriores (caso se justifique), desenvolva código para:
    a) somar todos os elementos de um array.
    b) Dado um array, retorna um array com todos os elementos ao quadrado.
    c) Dado um array de números, retorna um array com apenas os números pares desse array.*/
let numeros2 = [1, 2, 3, 4];

function Somar(arr){
    let soma = 0;
    for(let i=0; i < arr.length; i++){
        soma += arr[i];
    }
    return soma;
}

function Quadrado(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i]**2;
    }
    return arr;
}

function Pares(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            arr.splice(i, 1)
        }
    }
    return arr;
}

console.log("6.a) A soma dos elementos é: " + Somar(numeros2));
console.log("6.b) O quadrado dos números é: " + Quadrado(numeros2));
console.log(Pares(numeros2));
// 7. Utilizando o conceito de recursividade, crie uma função que mostre os números de forma decrescente (até zero), iniciando no valor passado por parâmetro. Explique devidamente a solução.
function Decrescente(n){
    if(n >= 0){
        console.log(n);
        Decrescente(n-1);
    } else {
        console.log("Fim");
    }
}
Decrescente(10);
// 8. Desenvolva uma função que calcula o somatório de qualquer número N. Exemplo: somatório de n é: 1 + 2 + 3 + ... + (n-1) + n
function Soma(value) {
    let soma = 0;
    for(let i= 0; i <= value; i++){
        soma += i;
    }
    return soma;
}
console.log(Soma(10));