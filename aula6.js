//1. Utilizando rest operators crie um array à custa de um Set.
let mySet = new Set([1, 1, 1, 3, 3, 5, 7, 7, 9, 9, 9, 9]);
let myArr = [...mySet];
console.log(myArr);

//2. Crie uma função que receba 2 Sets como parâmetros e devolva um que é a união dos 2 primeiros.
let setUm = new Set([1, 2, 3, 4]);
let setDois = new Set([4, 5, 6, 7]);
const uniaoSet = (set1, set2) => {
    let set3 = new Set([...set1, ...set2]);
    return set3;
};
console.log(uniaoSet(setUm, setDois));

//3. Crie uma função que receba 2 Sets como parâmetros e devolva um que é a interceção dos 2 primeiros.
const intersecao = (setA, setB) => {
    let intersecao = new Set();
    for (let elem of setB){
        if (setA.has(elem)){
            intersecao.add(elem);
        }
    }
    return intersecao;
};
console.log(intersecao(setUm, setDois));

//4. Desenvolva uma função que receba como parâmetro um array e que elimine os seus elementos duplicados e devolva o resultado sobre a forma de um Set.
const delRepetidos = (arr) => {
    return new Set(arr);
};

console.log(delRepetidos([1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8]));

//5. Crie um Set com que tenha a lista de carros que pertence a uma família. Cada objeto carro deve ter Marca,
// Matricula, Cor, Número de quilómetros, média de consumo. Crie uma função que receba como parâmetros dois Sets do tipo
// acima descrito e que devolva um Set com todos os carros de duas famílias.
let carrosFamSilva = new Set([
    {marca: "Opel", matricula: "00-SX-99", cor: "preto", Km: 20000, consumo: 6.3},
    {marca: "VW", matricula: "61-XS-23", cor: "cinza", Km: 123000, consumo: 6.5},

]);
let carrosFamMarques = new Set([
    {marca: "Toyota", matricula: "08-FF-14", cor: "branco", Km: 100000, consumo: 5.9},
    {marca: "Ford", matricula: "13-16-LR", cor: "branco", Km: 210000, consumo: 6.6},

]);
const carrosFamilias = (set1, set2) => {
    let cFamilias = new Set(set1);
    for (let elem of set2){
        cFamilias.add(elem);
    }
    return cFamilias;
};
console.log(carrosFamilias(carrosFamMarques, carrosFamSilva));

//6. Crie um Map com que tenha a lista de 5 alunos da turma. Cada objeto aluno deve ter nome, número, morada, UCs a
// frequentar, média. Crie uma função que receba como parâmetro um Map com a lista dos alunos e mostre aquele que tem melhor média.
let aluno1 = {
    nome: "José Pires",
    nMec: 91368,
    morada: "Rua de Cima",
    ucs: ["LABMM5", "GE", "GRH", "MPM"],
    media: 15
};
let aluno2 = {
    nome: "Joana Matos",
    nMec: 91678,
    morada: "Rua de Baixo",
    ucs: ["LABMM5", "GE", "GRH", "MPM"],
    media: 11}

;
let aluno3 = {
    nome: "Josefina Soares",
    nMec: 92222,
    morada: "Rua da Esquerda",
    ucs: ["LABMM5", "GE", "GRH", "MPM"],
    media: 13}
;
let aluno4 = {
    nome: "Manuel Matias",
    nMec: 92178,
    morada: "Rua da Direita",
    ucs: ["LABMM5", "GE", "GRH", "MPM"],
    media: 16
};
let aluno5 = {
    nome: "Bartolomeu Salgado",
    nMec: 91136,
    morada: "Rua das Flores",
    ucs: ["LABMM5", "GE", "GRH", "MPM"],
    media: 12
};

let mapAlunos = new Map();
mapAlunos.set(0, aluno1);
mapAlunos.set(1, aluno2);
mapAlunos.set(2, aluno3);
mapAlunos.set(3, aluno4);
mapAlunos.set(4, aluno5);

var melhor = {
    media: 0,
    key: null
};

mapAlunos.forEach((aluno, key, map) => {
    //console.log(map);
    if(aluno.media >= melhor.media){
        melhor.media = aluno.media;
        melhor.key = key;
    }
});

console.log(mapAlunos.get(melhor.key));

/*7. Explique o conceito de WeakMap. Experimente a sua utilização. Dê um exemplo da sua utilidade.
A primeira diferença entre Map e WeakMap é que no Weakmap as chaves devem ser objetos e não valores primitivos.
Se usarmos um objeto como chave e se não houver outra referência ao objeto, este será removido da memória automaticamente.
O WeakMap não suporta iterações e os métodos keys(), values(), entries(), logo não é possível obter uma lista de chave-valor.
métodos suportados:
-> weakMap.get(key);
-> weakMap.set(key, value);
-> weakMap.delete(key);
-> weakMap.has(key);
Casos de uso:
A principal área de aplicação de um weakMap é armazenamento adicional de dados.
Exemplo de https://javascript.info/weakmap-weakset:
// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
//neste caso não é necessário limpar visitsCountMap. Depois do objeto john se tornar inacessivel, exceto como chave de um weakMap,
este é removido da memória.
*/