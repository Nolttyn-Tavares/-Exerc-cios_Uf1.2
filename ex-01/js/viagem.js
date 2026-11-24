
//esses são valores fixos
const origem="Praia (Santiago)"
const destino="São Filipe (Fogo)"
//esses valores mudam ao longo do arquivo
let precoBilhete=3500;
let passageiros= 2;
let lugaresLivres= 120;
let temCamarote =false;
let numeroLugar=27;
let observacoes=null;
let total;

//mostrando o typeof de cada um
console.log(typeof origem, typeof destino,typeof precoBilhete,typeof passageiros,typeof lugaresLivres,typeof temCamarote,typeof numeroLugar)
// no console a parte por ser um valor direto
console.log(observacoes)
//cálculos pra ver o total

console.log(`Viagem: ${origem} -> ${destino}`)
console.log(`Passageiros: ${passageiros}`)
console.log(`Lugar: ${numeroLugar}`);
console.log(`Total: ${precoBilhete* passageiros} escudos`);
console.log(`Lugares livres no barco: ${lugaresLivres - passageiros}`);

console.log(`Camarote: ${temCamarote}`);

lugaresLivres = lugaresLivres - passageiros;

// passageiro extra e menos um lugar, aqui tive de recalcular :

passageiros = passageiros + 1;
total = precoBilhete * passageiros;
lugaresLivres = lugaresLivres - 1;


console.log(`Com ${passageiros} passageiros, o total é ${precoBilhete * passageiros} escudos.`);
console.log(`Lugares livres no barco: ${lugaresLivres}`);