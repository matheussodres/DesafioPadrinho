//////////////////////////////////////////////////////////////////////////
//          DESAFIO TRYBE - EXERCICIO HACKERRANK
/////////////////////////////////////////////////////////////////////////

function copaJogosMeh(ano) {
  if (ano % 4 === 2) {
    console.log("Esse ano vai ter Copa!");
  }
  if (ano % 2 === 0) {
    console.log("Esse ano vai ter Jogos!");
  } else {
    console.log("MEH");
  }
}
copaJogosMeh(2026);

//////////////////////////////////////////////////////////////////////////
//          UTILIZANDO .FIND PARA PROCURAR ARRAY
/////////////////////////////////////////////////////////////////////////

const pizzas = [
  "mussarela",
  "calabresa",
  "portuguesa",
  "marguerita",
  "nutella com chocolate branco",
];

const foundPizza = pizzas.find((p) => p.startsWith("m"));
console.log(foundPizza);

//////////////////////////////////////////////////////////////////////////
//          DIVISÃO PARA PRÓXIMO EXERCICIO
/////////////////////////////////////////////////////////////////////////
