//1. Melhore a classe Ponto2d da aula anterior e adicione um método que permita calcular a distância entre 2 pontos.
// Teste a sua classe.
//2. Atualize a classe Ponto2D para que tenha um método estático que permita a comparação entre dois pontos. Teste o código desenvolvido.
class Ponto2D{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    adicionarXY(x, y){
        this.x += x;
        this.y += y;
    }
    static distanciaEntre2Pontos(pontoA, pontoB){
        const dx = pontoA.x - pontoB.x;
        const dy = pontoA.y - pontoB.y;
        return Math.hypot(dx, dy);
    }
    /*static compare2Points(pontoA, pontoB){

    }*/
    //5. Crie um método na classe Ponto2D que retorne o ponto intermédio entre dois pontos.
    static pontoMedio(x1, x2, y1, y2){
        return new Ponto2D((x1+x2)/2, (y1+y2)/2);
    }
    static pontoMedio2(pontoA, pontoB){
        return new Ponto2D((pontoA.x + pontoB.x)/2, (pontoA.y + pontoB.y)/2);
    }
}
let p1 = new Ponto2D(2, 4);
let p2 = new Ponto2D(4, 2);
console.log("---Ex.1---");
console.log("A distância entre p1 e p2 é: " + Ponto2D.distanciaEntre2Pontos(p1, p2));
console.log("---Ex.5---");
console.log("---Ponto Médio---");
console.log(Ponto2D.pontoMedio(4, 2, 2, 4));
console.log("---Ponto Médio2---");
console.log(Ponto2D.pontoMedio2(p1, p2));

//3. Desenvolva a classe Ponto3D com os atributos que achar necessários para a caraterizar. Re-utilize o trabalho
// realizado para os pontos anteriores.
//a. A classe deve permitir calcular a distância entre dois pontos, a distância ao centro das coordenadas, somar um determinado valor à coordenada X, à Y e à Z.
//b. Teste a classe desenvolvida.
class Ponto3D extends Ponto2D{
    constructor(x, y, z){
        super(x, y);
        this.z = z;
    }
    static distanciaEntrePontos3D(pontoA, pontoB){
        const dx = pontoA.x - pontoB.x;
        const dy = pontoA.y - pontoB.y;
        const dz = pontoA.z - pontoB.z;
        return Math.hypot(dx, dy, dz);
    }
}
let p_um = new Ponto3D(1, 1, 1);
let p_dois = new Ponto3D(2, 2, 2);
console.log("---Ex.3. a)---");
console.log(`A distância entre p_um e p_dois é: `);
console.log(Ponto3D.distanciaEntrePontos3D(p_um, p_dois));
//4. Crie um ciclo que permita construir 10 Pontos2D com o mesmo valor da coordenada X e com as coordenadas Y a distarem
// 5 pontos. Calcule o somatório das distâncias entre os pontos (re-utilize métodos que já desenvolveu) e mostre ao utilizador.
let x = 2;
let y = 0;
let ponto = [];
let pontoAnterior;
let somaDistancias = 0;
for(let i = 0; i < 10; i++){
    ponto[i] = new Ponto2D(x, y=y+5);
    if(pontoAnterior != undefined){
        somaDistancias += Ponto2D.distanciaEntre2Pontos(ponto[i], pontoAnterior);
    }
    pontoAnterior = ponto[i];
}
console.log("---Ex.4---");
console.log(ponto);
console.log("---Somatório das distâncias---");
console.log(somaDistancias);

//6. Desenvolva a classe Circulo que com os atributos e construtores que achar necessários. A classe deverá ter, pelo menos,
// um método para calcular a área e outro o perímetro. Teste a sua classe.
//Um círculo é constituído por um centro e um raio, sendo que o ponto central é constituído por uma coordenada x e y.

class Circulo{
    constructor(c, r){
        //super(x, y);
        this.centro = c;
        this.raio = r;
    }
    get getCentro(){
        return this.centro;
    }
    get getRaio(){
        return this.raio;
    }
    set setCentro(c){
        this.centro = c;
    }
    set setRaio(r){
        this.raio = r;
    }
    area(){ // A = π . r2
        return Math.PI*this.raio*this.raio;
    }
    perimetro(){ //P = 2 π . r
        return 2*Math.PI*this.raio;
    }
}
let c1 = new Circulo(new Ponto2D(7, 3), 4);
console.log("---Ex.6---");
console.log(c1);
console.log("---Área:---");
console.log(c1.area());
console.log("---Perimetro:---");
console.log(c1.perimetro());

//7. Desenvolva a classe Retangulo com os atributos e métodos que achar necessários. A classe deverá ter, pelo menos,
// um método para calcular a área e outro o perímetro.
class Retangulo{
    constructor(a, b){
        this.base = b;
        this.altura = a;
    }
    get getBase(){
        return this.base;
    }
    set setBase(b){
        this.base = b;
    }
    get getAltura(){
        return this.altura;
    }
    set setAltura(a){
        this.altura = a;
    }
    area(){//A = b x a
        return this.base * this.altura;
    }
    perimetro(){//P = 2(b + a)
        return 2*(this.base + this.altura);
    }
}
let r1 = new Retangulo(8, 4);
console.log("---Ex.7---");
console.log(r1);
console.log("---Área:---");
console.log(r1.area());
console.log("---Perimetro:---");
console.log(r1.perimetro());

//8. Desenvolva a classe Poligono com os atributos e métodos que achar necessários. A classe deverá ter, pelo menos,
// um método para calcular o perímetro. A classe deve ser suficientemente flexível para poder ter um número variável de pontos.
// Teste a sua classe.
class Poligono {
    constructor(n_lados, c){
        this.numero_lados = n_lados;
        this.comprimento = c;
    }
    get getNLados(){
        switch (this.numero_lados) {
            case 5:
                return (`O Pentágono é um poligono com ${this.numero_lados} lados.`);
                break;
            case 6:
                return (`O Hexágono é um poligono com ${this.numero_lados} lados.`);
                break;
            case 7:
                return (`O Heptágono é um poligono com ${this.numero_lados} lados.`);
                break;
            case 8:
                return (`O Octógono é um poligono com ${this.numero_lados} lados.`);
                break;
            case 9:
                return (`O Eneágono é um poligono com ${this.numero_lados} lados.`);
                break;
            case 10:
                return (`O Decágono é um poligono com ${this.numero_lados} lados.`);
                break;
            case 11:
                return (`O Hendecágono é um poligono com ${this.numero_lados} lados.`);
                break;
            case 12:
                return (`O Dodecágono é um poligono com ${this.numero_lados} lados.`);
                break;
            case 15:
                return (`O Pentadecágono é um poligono com ${this.numero_lados} lados.`);
                break;
            case 20:
                return (`O Icoságono é um poligono com ${this.numero_lados} lados.`);
                break;
            default:
                return this.numero_lados;
        }
    }
    set setNLados(nl){
        this.numero_lados = nl;
    }
    get getComprimento(){
        return this.comprimento;
    }
    perimetro(){
        return this.numero_lados * this.comprimento;
    }
}
let pol1 = new Poligono(6, 4);
let pol2 = new Poligono(5, 6);
let pol3 = new Poligono(21, 6);
console.log("---Ex.8---");
console.log(pol1);
console.log(pol1.getNLados);
console.log("---Perimetro:---");
console.log(pol1.perimetro());
console.log(pol2);
console.log(pol2.getNLados);
console.log("---Perimetro:---");
console.log(pol2.perimetro());
console.log(pol3);
console.log(pol3.getNLados);
console.log("---Perimetro:---");
console.log(pol3.perimetro());