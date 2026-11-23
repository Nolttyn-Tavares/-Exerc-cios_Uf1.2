
/*vriáveis:
-let
-const
*/

let nome="Anilton";
let idade=21;// number (inteiro)
let estaPresente=true;//boolean aqui(true or false)
let altura=1.70;//number(float, decimal)

let nota; //undefined
let media=null;//valor intencional vazio

const morada="Praia";//string
//morad="praia" nao é possível alterar por der uma const
nome="maria";
idade=3456;



console.log("Meu nome e "+ nome,"minha idade:"+ idade);

console.log("minha morada:"+ morada)

console.log(typeof nome ); // tipo de dados da variavel nome

//vamos a um pequeno cálculo 
let nomCafe="capuccino"
let preco="250"
let quantidade;
let resposta=prompt("quandos cappucinos deseja pedir?");
quantidade= parseInt(resposta);

let total=0;

total= preco * quantidade;

console.log(nome + "pediu" + quantidade + "capuccino"+ nomCafe);
console.log("o total a pagar e de " + total + "escudos")
