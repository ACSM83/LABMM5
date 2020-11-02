//1. Crie um array que contenha uma lista de livros (introduza a lista diretamente no código). Cada objeto livro deve
// ter Titulo, Autores, e se já o leu. Liste os livros (utilizando console.log) com base na característica se foi ou não lido.
// Utilize Arrow functions.
let livros = [
    {titulo: "Livro1", autor: "autor1", lido: true},
    {titulo: "Livro2", autor: "autor2", lido: false},
    {titulo: "Livro3", autor: "autor3", lido: false},
    {titulo: "Livro4", autor: "autor4", lido: true}
];

const ordLidos = (arr) => arr.sort((a, b) => b.lido - a.lido);
console.log(ordLidos(livros));//lidos aparecem em primeiro lugar

let lidos = livros.filter((item) => item.lido == true);
console.log(lidos);

//2. Crie um array que contenha uma lista de filmes (lista de objetos Filme) (introduza a lista diretamente no código).
// Cada objeto filme deve ter Titulo, Ano, e Elenco principal. Faça uma função que, para receba um Objeto do tipo Filme
// e mostre todos os seus detalhes. Teste a função com o array de filmes que criou. Utilize Arrow functions.
let filmes = [
    {titulo: "Filme1", ano: 1983, elenco: ["ator1", "ator2", "ator3"]},
    {titulo: "Filme2", ano: 1999, elenco: ["ator4", "ator5", "ator6"]},
    {titulo: "Filme3", ano: 2010, elenco: ["ator7", "ator8", "ator9"]},
    {titulo: "Filme4", ano: 2020, elenco: ["ator10", "ator11", "ator12"]},
    {titulo: "Filme5", ano: 2019, elenco: ["ator13", "ator14", "ator15"]},
];
const filmeDetalhe = (arr, title) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].titulo == title){
            return arr[i];
        }
    }
    return "filme não encontrado";
};
console.log(filmeDetalhe(filmes, "Filme1"));
//3. Crie uma função que receba 6 números e faça a sua multiplicação. Utilize o conceito de spread operator.
let nums = [1, 2, 3, 4, 5, 6];
const multiplicacao = (a, b, c, d, e, f) => a*b*c*d*e*f;
console.log(multiplicacao(...nums));

//4. Crie uma função que receba vários números e faça a sua multiplicação. Utilize o conceito de rest operator.

const multiplicacao2 = (...numeros) => {
    let res = 1;
    for (let n of numeros) {
        res *= n;
    }
    return res;
};

console.log(multiplicacao2(1, 2, 3, 4, 5, 6));

//5. Crie 2 arrays. Crie um terceiro, a junção dos 2, utilizando spread operators.
let arr1 = [2, 4, 6];
let arr2 = [1, 3, 5];
let arr3 = [...arr1, ...arr2];

console.log(arr3);

//6. Construa um array de valores. Utilize o Math.min em conjugação com spread operator para obter o valor mínimo do array.
let nums2 = [15, 26, 2, 9, 33, 100];
console.log(Math.min(...nums2));

//7. Copie 2 arrays utilizando rest operators e Array Destructuring.
let nums3 = [2, 4, 6, 8];
let [...pares] = nums3;
console.log(pares);

//8. Explique o conceito de “Destructured Objects”. Desenvolva uma função que utilize este conceito na sua lista de parâmetros.
// Teste a sua utilização. Defina valores por omissão para os parâmetros e teste a utilização da função sem todos os valores
// dos parâmetros definidos. Exemplo:
function mostrasumario({ nome, notas: { matematica = 0, geografia = 0, ciencias = 0 } }) {
    console.log('Olá, ' + nome);
    console.log(' Nota de matemática ' + matematica);
    console.log(' Nota de geografia ' + geografia);
    console.log(' Nota de ciencias ' + ciencias);
}
let aluno = ( {nome: "Ana", notas: {matematica: 10, ciencias: 14} });
console.log(mostrasumario(aluno));