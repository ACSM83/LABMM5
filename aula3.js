// 1. Desenvolva uma função que receba um array com 2 números e devolva um array ordenado por ordem crescente.
let animais = ["galinha", "sapo", "crocodilo", "cao", "baleia" ];
let numeros = [8, 13, 5, 77, 18, 55];
let numeros2 = [1, 5, 3, 4];

function sortCresc(arr){
    for(let i = 0; i < arr.length; i++){
        if ( isNaN(arr[i])){
            return arr.sort();
        } else {
            return arr.sort((a, b) => a-b);
        }
    }
}
console.log(sortCresc(numeros));
console.log(sortCresc(animais));

// 2. Desenvolva uma função que receba um array com 3 números e devolva um array ordenado por ordem decrescente.
function sortDecresc(arr) {
    for(let i = 0; i < arr.length; i++){
        if ( isNaN(arr[i])){
            return arr.sort().reverse();
        } else {
            return arr.sort((a, b) => b-a);
        }
    }
}
console.log(sortDecresc(numeros));
console.log(sortDecresc(animais));

// 3. Desenvolva uma função que receba um array com 4 números e devolva um array pela ordem inversa. Se o array for [1,5,3,4] o resultado será [4,3,5,1]
function inversa(arr){
    return arr.reverse();
}
console.log(inversa(numeros2));
// 4. Desenvolva uma função que receba um array (de qualquer tamanho) e devolva um array ordenado por ordem crescente (dica: verifique a utilização do método sort)
