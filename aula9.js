//1. Crie um objeto. Teste a diferença entre deep e shalow copy.
var Person = {
    firstName: "Antónia",
    lastName: "Costa",
    ccNumber: 17824597,
    address: "Rua das Flores"
};
//Shallow copy
let PersonCopy = Person;
PersonCopy.firstName = "Carlota";
let PersonCopy2 = {firstName: Person.firstName, lastName: Person.lastName, ccNumber: Person.ccNumber, address: Person.address};
PersonCopy2.firstName = "Josefina";
console.log("---Ex. 1 - Shallow Copy---")
console.log(PersonCopy);
console.log(Person);
console.log("---Ex. 1 - Deep Copy---")
console.log(Person);
console.log(PersonCopy2);

//2. Considere o seguinte Generator:
    function* range(inicio, fim) {
        for (let i= inicio; i<= fim; i++) {
            yield i;
        }
    }
//a) Demonstre a sua utilização. Faça-o com a sua chamada em diferentes momentos do seu código e valide a sua utilidade.
let iterator = range(1, 5);
console.log("---Ex.2 a)---");
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

//b) Utilize o método for..of para iterar dentro da lista de elementos
console.log("---Ex.2 b)---");
let values = [99, 98, 97, 96, 95, 94, 93, 92, 91, 90];
for (let num of values){
    console.log(num);
}
let iterator2 = values[Symbol.iterator]();
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

///3. Crie um Generator que pare 3 vezes a sua execução. Teste a sua utilização.
console.log("---Ex.3---");
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
let g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
//4. Experimente os “default iterators” de Array, Set, e Map. Para tal crie objetos de cada tipo e percorra todos os seus elementos.
let arr = [1, 3, 5, 7, 9];
let iteratorArr = arr[Symbol.iterator]();
console.log("---Ex.4---");
for(let item of arr.entries()){
    console.log(item);
};

let set = new Set([10, 10, 11, 11, 12, 13, 13, 14]);
let iteratorSet = set[Symbol.iterator]();
for (let item of set.entries()){
    console.log(item);
}
let map = new Map();
map.set(0, "Ana");
map.set(1, "Maria");
map.set(2, "Jorge");
map.set(3, "José");
let iteratorMap = map[Symbol.iterator]();
for(let item of iteratorMap){
    console.log(item);
}

//5. Crie um generator que mostre os números de um a 10. Teste a sua utilização.
console.log("---Ex.5---");
function *count2Ten (){
    for(let i = 0; i <= 10; i++){
        yield i;
    }
}
let iterator3 = count2Ten();
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());

//6. Crie um “countdown iterator” que conte de 9 para 1. Utilize generators.
console.log("---Ex.6---");
function *countDown (){
    for(let i = 9; i > 0; i--){
        yield i;
    }
}
let contagemDecrescente = countDown();
console.log(contagemDecrescente.next());
console.log(contagemDecrescente.next());
console.log(contagemDecrescente.next());
console.log(contagemDecrescente.next());
console.log(contagemDecrescente.next());
console.log(contagemDecrescente.next());
console.log(contagemDecrescente.next());
console.log(contagemDecrescente.next());
console.log(contagemDecrescente.next());
//7. Torne o seguinte objeto “iteratable”:
console.log("---Ex.7---");
let ListaTarefas = {
    ListaTrf: [],
    Adicionar( descricao ) {
        this. ListaTrf.push( { descricao, feito: false } );
        return this;
    },
    TerminarTrf( index ) {
        if ( index < this. ListaTrf.length ) {
            this. ListaTrf[index].feito = true;
        }
        return this;
    },
    *[Symbol.iterator](){
        for(tarefa of this.ListaTrf){
            yield tarefa;
        }
    }
};
ListaTarefas.Adicionar("Ir às Compras");
ListaTarefas.Adicionar("Levar a princesa à escola.");
ListaTarefas.Adicionar("Ir à farmácia");
ListaTarefas.TerminarTrf(1);
for (let tarefa of ListaTarefas){
    console.log(tarefa);
}