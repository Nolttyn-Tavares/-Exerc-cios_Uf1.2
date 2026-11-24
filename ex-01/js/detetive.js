// ==========================================================================
// O Detetive de Erros: a Mercearia da Tia Lena
// Este ficheiro tem 6 erros. Corrijam um de cada vez e, ao lado de cada
// correção, escrevam um comentário com a mensagem que a Console mostrava.
// ==========================================================================

const nomeLoja = "Mercearia da Tia Lena";
let nomeProduto = "Arroz";
let precoQuilo = 150;
let quilos = precoQuilo * 2;

console.log(`${nomeLoja}: ${nomeProduto} a ${precoQuilo} escudos o quilo.`);// o "{precoQuilo}" não pode começar com maiuscula, por isso troquei a forma como a letra inicial é apresentada

let stock = 40; // com o "stock" em const n daria para usar o stock para somar pq nada ali do valor podia ser alterado
 stock =stock -5; 
console.log(`Ficaram ${stock} sacos de arroz.`);

let quantidade = 3; // estáva entre " aspas" e isso faz o número ser visto como string  e não como number
let total = precoQuilo * quantidade; // estava aqui adiçao e acredito fazer mais sentido multiplicar já que é sempre preço x quantidade em casos de compras
console.log(`3 quilos custam ${total} escudos.`);

let emPromocao = false; // tirei os aspas por ser boolean
console.log(typeof emPromocao);