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
//          UTILIZANDO .FILTER PARA PROCURAR ARRAY
/////////////////////////////////////////////////////////////////////////

const produtos = [
  { id: 1, name: "Detergente", value: 2.0, category: "limpeza" },
  { id: 2, name: "Sabao em Po", value: 2.0, category: "limpeza" },
  { id: 3, name: "Sabao em Barra", value: 2.0, category: "limpeza" },
  { id: 4, name: "Chocolate", value: 2.0, category: "alimento" },
  { id: 5, name: "Pao", value: 2.0, category: "alimento" },
];

const alimentos = produtos.filter((p) => p.category === "alimento");
console.log(alimentos);

//////////////////////////////////////////////////////////////////////////
//          UTILIZANDO .MAP PARA PROCURAR ARRAY
/////////////////////////////////////////////////////////////////////////

// Definindo os numeros da minha array
const numeros = [1, 2, 3, 4, 5];

// Definindo multiplicar por 2, pode ser alterado
const duplicar = numeros.map((x) => x * 2);

// Imprimindo o resultado no console
console.log(duplicar);

//////////////////////////////////////////////////////////////////////////
//          DIVISÃO PARA PRÓXIMO EXERCICIO
/////////////////////////////////////////////////////////////////////////
