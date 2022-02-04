// var = Variavel usada em qualquer lugar;
// let = Usado somente no scop localStorage;
// const = Parece com a Let, mas o seu valor não pode ser alterado. É uma caixinha que guarda um valor que não pode ser alterado;
// array = E uma caixinha, que dentro dela tem outras caixas, começando pela posição zero.
//____________________________________________________________________________________________________________//
const name = 'Matheus'
console.log(name)

function sum(firstValue, secondValue) {
  return firstValue + secondValue
}

const sub = (firstValue, secondValue) => {
  return firstValue - secondValue
}
console.log(sub(2, 1))

const people = ['Matheus', 'Gabriel']
console.log('Nome da pessoa:', people[1])

const numbers = [1, 2, 3, 4]
const forEach = numbers.forEach

// console.log(age)
// console.log(sum(1,2))

const multi = (firstValue, secondValue, thirdValue) => {
  return firstValue * secondValue * thirdValue
}

const div = (firstValue, secondValue) => {
  return firstValue / secondValue
}

const combine = (firstValue) => {
  // return firstValue + " dev"
  return `${firstValue} dev`
}
console.log(combine('Gabriel'))

const combine2 = (firstValue) => `dev ${firstValue}`

console.log(combine2('Rafael'))

const combine3 = (firstValue, secondValue) =>
  `O ${firstValue} tem ${secondValue} anos`
console.log(combine3('Rafael', 40))

const comparator = (firstValue, secondValue) => {
  if (firstValue > secondValue)
    return `${firstValue} é maior que ${secondValue}`
  if (firstValue < secondValue) return `${firstValue} é maior que ${firstValue}`
  return 'Valores são iguais'
}
console.log(comparator(5, 5))
