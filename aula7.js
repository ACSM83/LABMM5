//1. Criar a classe Ponto2D com 2 atributos: a coordenada x e a coordenada y. Adicione um método que permita adicionar
// valores (passados como parâmetros) às suas coordenadas x e y; Teste a sua utilização.
class Ponto2D{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    adicionarXY(x, y){
        this.x += x;
        this.y += y;
    }
}
let ponto1 = new Ponto2D(5, 6);
console.log("---Ex.1---");
console.log("Ponto1 inicial: ", ponto1);
ponto1.adicionarXY(8, 12);
console.log("Ponto1 depois do método adicionar: ", ponto1);

//2. Desenvolva a classe segmento_reta que deve ter dois pontos (ponto2D). Esta classe deve ter um método que permita
// saber o tamanho do segmento de reta. O segmento de reta deve ter também um atributo com o seu tamanho. Teste a sua classe.
class segmento_reta{
    constructor(x1, y1, x2, y2){
        this.p1 = new Ponto2D(x1, y1);
        this.p2 = new Ponto2D(x2, y2);
    }
    static tamanho(){
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.hypot(dx, dy);
    }
}
//com herança
class SegmentoReta extends Ponto2D{
    constructor(ponto1, ponto2){
        super(x, y);
    }
    static tamanho2(ponto1, ponto2){
        const dx = ponto1.x - ponto2.x;
        const dy = ponto1.y - ponto2.y;
        return Math.hypot(dx, dy);
    }
}
const p1 = new Ponto2D(1, 1);
const p2 = new Ponto2D(2,2);
p1.adicionarXY(1, 1);//p.e. se quiser alterar ou adicionar novas coordenadas
p2.adicionarXY(2, 2);
console.log("---Ex.2---")
console.log("Cálculo da distância entre 2 pontos, com 4 parâmetros de entrada: ");
console.log(segmento_reta.tamanho(2, 2, 4, 4));
console.log("Cálculo da distância entre 2 pontos, com herança da classe Ponto2D: ");
console.log(SegmentoReta.tamanho2(p1, p2));


//3. Considere o seguinte código:
//Altere o código para ter setters e getters. Teste a classe.*/

class Teste {
    constructor(nome, verbo) {
        this.nome = nome;
        this.verbo = verbo || "says"
    }
    get getNome() {
        return this.nome;
    }
    set setNome(n){
        this.nome = n;
    }
    get getVerbo(){
        return this.verbo;
    }
    set setVerbo(v){
        this.verbo = v;
    }
}
class Shouter extends Teste {
    constructor(nome) {
        super(nome, "shouts")
    }
    get getNome() {
        return this.nome;
    }
    set setVerbo(v){
        this.verbo = v.toUpperCase();
    }
}

let a = new Teste("Ana");
let b = new Shouter("Cristina");
console.log("---Ex.3---")
console.log(a);
console.log(b);
console.log(a.getNome);
console.log(b.getNome);
a.setVerbo = "diz";
b.setVerbo = "grita";
console.log(a.getVerbo);
console.log(b.getVerbo);

