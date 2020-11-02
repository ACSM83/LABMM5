//1. Crie um array que contenha uma lista de livros (introduza a lista diretamente no código). Cada objeto livro deve ter Titulo, Autores, e se já o leu. Liste os livros (utilizando console.log) com base na característica se foi ou não lido. Utilize Arrow functions.
let livros = [
    {titulo: "Cem anos de solidão", autor: "Gabriel García Marquez", lido: false},
    {titulo: "A Morgadinha dos Canaviais", autor: "Júlio Dinis", lido: true},
    {titulo: "Inferno", autor: "Dan Brown", lido: true},
    {titulo: "Ensaio sobre a Cegueira", autor: "José Saramago", lido: false},
    {titulo: "Terra Sonâmbula", autor: "Mia Couto", lido: false},
];
//função com método sort()
let ordenarLivros = arr => arr.sort( (a, b) => (b.lido - a.lido) );
console.log(ordenarLivros(livros));

//mostrar livros lidos com método filter()
let livrosLidos = livros.filter((item) => item.lido == true);
console.log(livrosLidos);

//2. Crie um array que contenha uma lista de filmes (lista de objetos Filme) (introduza a lista diretamente no código). Cada objeto filme deve ter Titulo, Ano, e Elenco principal. Faça uma função que, para receba um Objeto do tipo Filme e mostre todos os seus detalhes. Teste a função com o array de filmes que criou. Utilize Arrow functions.
let filmes = [
    {titulo: "a casa da senhora peregrine para crianças peculiares", ano: 2016, elenco: ["Eva Green", "Asa Butterfield", "Ella Purnell", "Samuel L. Jackson"]},
    {titulo: "o rei", ano: 2019, elenco: ["Robert Pattinson", "Joel Edgerton", "Lily-Rose Depp", "Sean Harris"]},
    {titulo: "um amor, mil casamentos", ano: 2020, elenco: ["Sam Claflin", "Olivia Munn", "Eleanor Tomlinson", "Freida Pinto"]},
    {titulo: "frozen 2 - O Reino do Gelo", ano: 2019, elenco: ["Idina Menzel", "Kristen Bell", "Jonathan Groff", "Josh Gad"]}
];

function detalhe (arr, valor){
    for(let i in arr){
        if(arr[i]["titulo"] == valor){
            console.log(arr[i]);
        }
    }
}
detalhe(filmes, "O rei");

//3. Crie uma função que receba 6 números e faça a sua multiplicação. Utilize o conceito de spread operator.
var args = [1, 2, 3, 4, 5, 6];

const multiplicacao = (a, b, c, d, e, f) => a * b * c * d * e * f;

console.log("A multiplicação dos valores de args é igual a " + multiplicacao(...args));

//4. Crie uma função que receba vários números e faça a sua multiplicação. Utilize o conceito de rest operator.

const multiplicacao2 = (...nums2) => {
    let totalMulti = 1;
    for (let i in nums2){
        totalMulti = totalMulti * nums2[i];
    }
    return totalMulti;
}
console.log("O valor total da multiplicação com rest operator é " + multiplicacao2(1, 2, 3, 4, 5, 6));

//5. Crie 2 arrays. Crie um terceiro, a junção dos 2, utilizando spread operators.
const arr1 = ["azul", "verde", "vermelho"];
const arr2 = ["FCP", "SCP", "SLB"];
const arr3 = arr1.concat(...arr2);

console.log(arr3);

//6. Construa um array de valores. Utilize o Math.min em conjugação com spread operator para obter o valor mínimo do array.
const valores = [8, 33, 88, 94, 1, 20, 14, 3, 98];

console.log("O valor mínimo é " + Math.min(...valores));
console.log("O valor máximo é " + Math.max(...valores));

//7. Copie 2 arrays utilizando rest operators e Array Destructuring.
const cores = ["amarelo", "cinzento", ...arr1]; // novo array cores construído a partir de dois novos elementos + arr1
console.log(cores);

let {titulo, ano, elenco} = filmes[0];
console.log(`Título: 
${titulo}.`);
console.log(`Ano: ${ano}.`);
console.log(`Elenco: 
${elenco}.`);

//8. Explique o conceito de “Destructured Objects”. Desenvolva uma função que utilize este conceito na sua lista de parâmetros. Teste a sua utilização. Defina valores por omissão para os parâmetros e teste a utilização da função sem todos os valores dos parâmetros definidos. Exemplo:
let mostraSumario = ({ nome, notas: { matematica = 0, geografia = 0, ciencias = 0 } }) => {
    console.log("Olá, " + nome);
    console.log("Nota de matemática " + matematica);
    console.log("Nota de geografia " + geografia);
    console.log("Nota de ciencias " + ciencias);
};
let aluno = {
    nome: "Ana",
    notas: ({matematica: 10, geografia: 11, ciencias: 12}),
};

mostraSumario(aluno);

//resolução Samuel
let pessoa = {
    nome: "Zé",
    idade: undefined,
};

const frase = ({ nome: nomePessoa, idade: idadePessoa = 10 }) => {
    console.log(`Olá! O meu nome é ${nomePessoa} e tenho  ${idadePessoa} anos`);
};
frase(pessoa); //Olá! O meu nome é Zé e tenho  10 anos