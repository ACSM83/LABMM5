//1. Utilizando rest operators crie um array à custa de um Set.
var cidadeSet = new Set();

cidadeSet.add("aveiro");
cidadeSet.add("oliveira de azeméis");
cidadeSet.add("ilhavo");
cidadeSet.add("gafanha da nazaré");

console.log(cidadeSet);
const arrCidades = (...cidades) => cidades;
console.log(arrCidades(cidadeSet));

//2. Crie uma função que receba 2 Sets como parâmetros e devolva um que é a união dos 2 primeiros.
const concatSets = (set1, set2) => {
    let novoSet = new Set(set1);
    for (let elem of set2){
        novoSet.add(elem);
    }
    return novoSet;
}
const cPostalSet = new Set();
cPostalSet.add(3810);
cPostalSet.add(3830);

const nCidadeSet = new Set();
nCidadeSet.add("aveiro");
nCidadeSet.add("ilhavo");

console.log(concatSets(cPostalSet, nCidadeSet));
//com Spread/ Rest Operators
let set1 = new Set([4, 5, 6]);
let set2 = new Set([1, 2, 3, 4]);

const uniao = (setum, setdois) => {
    let set3 = new Set([...setum,...setdois]);
    set3.forEach((item) => console.log(item))
    return set3;
}
let set4 = uniao(set1, set2);

//3. Crie uma função que receba 2 Sets como parâmetros e devolva um que é a interceção dos 2 primeiros.
const numeros = new Set();
numeros.add(1);
numeros.add(8);
numeros.add(12);
numeros.add(20);

const numeros2 = new Set();
numeros2.add(8);
numeros2.add(12);
numeros2.add(22);

const intersecaoSets = (set1, set2) => {
    let intersecao = new Set();
    for (let elem of set2){
        if(set1.has(elem)){
            intersecao.add(elem);
        }
    }
    return intersecao;
};
console.log(intersecaoSets(numeros, numeros2));

//4. Desenvolva uma função que receba como parâmetro um array e que elimine os seus elementos duplicados e devolva o resultado sobre a forma de um Set.

const delRepetidos = arr => {
    let set1 = new Set();
    for(let elem of arr){
        set1.add(elem);
    }
    return set1;
};
console.log(delRepetidos([1, 1, 3, 9, 18, 18, 21, 21, 33, 33]));
//5. Crie um Set com que tenha a lista de carros que pertence a uma família. Cada objeto carro deve ter Marca, Matricula, Cor, Número de quilómetros, média de consumo.
//Crie uma função que receba como parâmetros dois Sets do tipo acima descrito e que devolva um Set com todos os carros de duas famílias.
const carrosFamiliaSilva = new Set([
    {marca: "Opel", matricula: "15-FF-38", cor: "preto", km: 20000, consumo: 6.5},
    {marca: "Seat", matricula: "99-LR-13", cor: "branco", km: 120000, consumo: 5.8},
]);

const carrosFamiliaMarques = new Set([
    {marca: "Toyota", matricula: "01-SS-99", cor: "cinzento", km: 88600, consumo: 5.9},
    {marca: "Mercedes-Benz", matricula: "44-28-MM", cor: "cinzento", km: 210000, consumo: 6.9}
]);

const carrosFamilias = (set1, set2) => {
    let novoSet = new Set(set1);
    for (let elem of set2){
        novoSet.add(elem);
    }
    return novoSet;
};
console.log(carrosFamilias(carrosFamiliaSilva, carrosFamiliaMarques));

//6. Crie um Map com que tenha a lista de 5 alunos da turma. Cada objeto aluno deve ter nome, número, morada, UCs a frequentar, média. Crie uma função que receba como parâmetro um Map com a lista dos alunos e mostre aquele que tem melhor média.
let aluno1 = {
    nome: "Ana Marques",
    nMec: 92917,
    morada: "Rua do Barreiro",
    ucs: ["LABMM5", "GE", "GRH", "MPM"],
    media: 10
};

let aluno2 = {
    nome: "Josefina Andrade",
    nMec: 91111,
    morada: "Rua das Flores",
    ucs: ["LABMM5", "GE", "GRH", "MPM"],
    media: 11
};
let aluno3 = {
    nome: "Carlos Matadinha",
    nMec: 91978,
    morada: "Rua do Cais da Fonte Nova",
    ucs: ["LABMM5", "GE", "GRH", "MPM"],
    media: 12
};
let aluno4 = {
    nome: "André Paixão",
    nMec: 90198,
    morada: "Rua do Sobreiro",
    ucs: ["LABMM5", "GE", "GRH", "MPM"],
    media: 13
};
let aluno5 = {
    nome: "Serafim Gomes",
    nMec: 89510,
    morada: "Rua da Igreja",
    ucs: ["LABMM5", "GE", "GRH", "MPM"],
    media: 14
};
let alunosMap = new Map();
alunosMap.set(0, aluno1);
alunosMap.set(1, aluno2);
alunosMap.set(2, aluno3);
alunosMap.set(3, aluno4);
alunosMap.set(4, aluno5);

//console.log(alunosMap);
var melhor = {media: 0, key: null};
alunosMap.forEach((aluno, key, map) => {
    if(aluno.media >= melhor.media){
        melhor.media = aluno.media;
        melhor.key = key;
    }
});
console.log(alunosMap.get(melhor.key));

//7. Explique o conceito de WeakMap. Experimente a sua utilização. Dê um exemplo da sua utilidade.
/*Um WeakMap pode ser implementado em JavaScript com dois arrays (um para chaves, um para valores). Desvantagens:
- procura de chaves no map;
- problema de memory leak.
Nos WeakMaps nativos, referências aos objetos chave são "fracas", o que significa que não previnem a coleção pelo Garbage Colector
no caso de não haver nenhuma outra referência ao objeto. As chaves de WeakMap não são enumeráveis (i.e. não existe um método que
permita obter uma lista de chaves).*/

var wm1 = new WeakMap();
var o1 ={}, o2 ={}, o3 ={};

wm1.set(o1, "Ana");
wm1.set(o2, 37);
wm1.set(o3, "Rua do Sol");

console.log(wm1.get(o1));