// 1) Criar um array com os nomes de 7 cidades de Pernambuco:
// a) Ordenar seus elementos na ordem invertida.
// b) Exibir no console.
// c) Adicionar duas cidades usando splice().
// d) Exibir no console.

let cidadesPE = ['Recife', 'Olinda', 'Petrolina', 'Caruaru', 'Paudalho', 'Bonito', 'Gravatá'];
console.log(cidadesPE.reverse());

let addCidades = cidadesPE.splice(0, 0, 'Salgueiro', 'Triunfo');
console.log(cidadesPE);


// 2) Criar um array com os valores 1,4,8,6,9,2,6,7,3,0,5
// a) Obter qual o index onde está o elemento 9.
// b) Exibir no console qual a posição no array em que o elemento 9 está.

let array = [1,4,8,6,9,2,6,7,3,0,5];

console.log(array.length);
console.log(array.indexOf(9));