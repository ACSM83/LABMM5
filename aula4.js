//1. Crie uma const e verifique não pode alterar o seu conteúdo.
const marca = "Opel";
const modelo = "Insignia";
//marca = marca + modelo; -ERRO: Assignment to constant variable.
const carrosMarcas = ["VW", "Hyundai", "Chevrolet", "Ford"];
carrosMarcas[2]= "Nissan";
console.log(carrosMarcas);

//2. Crie uma variável utilizando a palavra reservada let e teste a sua utilização com uma variável global e uma variável local (de uma função) com o mesmo nome. Valide utilizando, por exemplo, console.log(..); Tente testar o comportamento da definição de variáveis em múltiplas situações.
let name = "Ana";

function nome(){
    let name = "Cristina";
    return name;
}
console.log(name);
console.log(nome(name));

//3. Considere que pretende escrever uma mensagem composta por strings que variam. Utilize o conceito de template strings para o fazer. No exemplo seguinte altere a forma de fazer o console.log:
var nome = "Ana";
var apelido = "Marques";
console.log(`O meu nome é ${nome} ${apelido}.`);

//4. Crie uma função que utilize “default parameters”. Experimente a função e confirme a utilidade de utilizar funções com esta funcionalidade. Execute a função com parâmetros com o valor null e undefined.
function person(nome, idade = 18){
    console.log(nome, idade);
}
person("Ana", 20);
person("Maria");
//5. Crie a mesma função utilizando o conceito de Arrow function.
const person2 = (n, i = 18) => n + i;

console.log(person2("Catarina ", 37));
console.log(person2("André "));
//6. Crie um objeto que possa guardar a informação de uma receita. Deve ter Nome, Número de pessoas e Ingredientes (um array de strings). Mostre o conteúdo da receita (utilize console.log e garanta que os ingredientes aparecem listados linha a linha).
function recipe(title, nPerson, ingredients){
    return {
        title,
        nPerson,
        ingredients
    };
}

let receitaBN = new recipe("Bacalhau com Natas", 4, ["Bacalhau", "batatas", "natas"]);
console.log(receitaBN);
//console.log(recipe.title);
//7. Considere o seguinte array de objetos
var aprovados = [
    {candidato: "Maira Soares", nota: 16, idade: 17},
    {candidato: "Manuel Marques", nota: 14, idade: 20},
    {candidato: "Nuno Gomes", nota: 15, idade: 19},
    {candidato: "Patrícia Oliveira", nota: 14, idade: 21},
    {candidato: "Adriana Pedrosa", nota: 17, idade: 22}
];
//Crie uma função que possa ser utilizada para ordenar este array segundo as notas dos candidatos. Considere a utilização do método sort do array. Caso as notas sejam iguais, o candidato mais novo será colocado em 1 lugar. Utilize o conceito de arrow functions.
const compareGrade = arr => arr.sort(function (a, b){
    if (a.nota > b.nota){
        return -1;
    }
    if (a.nota < b.nota){
        return 1;
    }
    return a.idade - b.idade;

});
console.log(compareGrade(aprovados));