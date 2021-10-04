// 1) Para a string texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.", exibir no console:
// a) O número de caracteres da string.
// b) A string com todas suas letras em maiúsculo.
// c) O número de vogais da string.
// d) A string com todas suas letras em minúsculo.
// e) Fazer a busca pela palavra humanidade e exibir o index onde ela está

let string = 'Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.';
console.log(string.length);
let string1 = string.split('').filter(letter => 'aeioué'.includes(letter)).length;
console.log(string1);

// 2) Percorrer os números pares menores que 100.
// a) Adicionar em um array.
// b) Transformar o array em string.
// c) Exibir no console.

let num = [];

for (let contador = 0; contador < 100; contador++) {
  if (contador % 2 === 0) {
    num.push(contador);
  }
}

console.log(num.toString());